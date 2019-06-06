import { Component, OnInit } from '@angular/core';
import {Ocorrencia} from '../shared/banco.model';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';
import {Platform, ToastController} from '@ionic/angular';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {File} from '@ionic-native/file/ngx';
import {AngularFireStorage} from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-ocorrencias',
  templateUrl: './ocorrencias.page.html',
  styleUrls: ['./ocorrencias.page.scss'],
  providers: [FirebaseService]
})
export class OcorrenciasPage implements OnInit {
  mostraCardLost = false;
  mostraCardSelvagem = false;
  mostraCardEspecies = false;
  mostraCardCrimes = false;
  mostraCardEstrutura = false;
  addOcorrencia = false;

  public ocorrencia: Ocorrencia = {
   tipo: '',
   nomeOcorrencia: '',
   local: '',
   data: null,
    url: ''
  };

  public alterarTipo: string;
  public downloadUri: Observable<string>;
  public urlTransition: string;
  public blob: Blob;
  public nomeImagem: string;

  public id = null;
  private ocorrencias: Observable<Ocorrencia[]>;

  public formularioPreenchido: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private firebaseService: FirebaseService,
              private router: Router, private toastCtrl: ToastController, private camera: Camera,
              private platform: Platform, private file: File, private afStorage: AngularFireStorage) { }


  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.ocorrencias = this.firebaseService.getOcorrencias();
  }

  ionViewWillEnter() {
    if (this.id) {
      this.firebaseService.getOcorrencia(this.id).subscribe(ocorrencia => {
        this.ocorrencia = ocorrencia;
      });
    }
  }



  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 1500
    }).then(toast => toast.present());
  }

  verLost() {
    this.mostraCardLost = !this.mostraCardLost;
    this.alterarTipo = 'Animal Perdido';
    this.firebaseService.alterarTipo(this.alterarTipo);
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.ocorrencias = this.firebaseService.getOcorrenciasPorTipo();
  }
  verSelvagem() {
    this.mostraCardSelvagem = !this.mostraCardSelvagem;
    this.alterarTipo = 'Fauna Silvestre';
    this.firebaseService.alterarTipo(this.alterarTipo);
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.ocorrencias = this.firebaseService.getOcorrenciasPorTipo();
  }
  verEspecies() {
    this.mostraCardEspecies = !this.mostraCardEspecies;
    this.alterarTipo = 'Flora Silvestre';
    this.firebaseService.alterarTipo(this.alterarTipo);
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.ocorrencias = this.firebaseService.getOcorrenciasPorTipo();
  }
  verCrimes() {
    this.mostraCardCrimes = !this.mostraCardCrimes;
    this.alterarTipo = 'Crimes Ambientais';
    this.firebaseService.alterarTipo(this.alterarTipo);
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.ocorrencias = this.firebaseService.getOcorrenciasPorTipo();
  }
  verEstrutura() {
    this.mostraCardEstrutura = !this.mostraCardEstrutura;
    this.alterarTipo = 'Estrutura do Parque';
    this.firebaseService.alterarTipo(this.alterarTipo);
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.ocorrencias = this.firebaseService.getOcorrenciasPorTipo();
  }
  addOcorrencias() {
    this.addOcorrencia = !this.addOcorrencia;
  }

  /* Camera  */
  async abrirCamera() {

    if(this.nomeImagem == undefined){
      this.nomeImagem = this.ocorrencia.nomeOcorrencia;
      this.showToast('Preencha os campos abaixo primeiro')

    } else {

      const options: CameraOptions = {
        quality: 50,
        destinationType: this.camera.DestinationType.FILE_URI,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        correctOrientation: true
      };

      try {
        const fileUri: string = await this.camera.getPicture(options);

        let file: string;

        if(this.platform.is('ios')) {
          file = fileUri.split('/').pop();
        } else {
          file = fileUri.substring(fileUri.lastIndexOf('/') +1, fileUri.indexOf('?'));
        }

        const path: string = fileUri.substring(0, fileUri.lastIndexOf('/'));
        const buffer: ArrayBuffer = await  this.file.readAsArrayBuffer(path, file);
        const blob: Blob = new Blob([buffer], { type: 'image/jpeg'});

        this.blob = blob

      }catch (error) {
        console.log(error)
      }

      this.nomeImagem = this.ocorrencia.nomeOcorrencia;
      this.uploadImagem(this.blob);

    }
  }

  uploadImagem(blob: Blob){
    const ref = this.afStorage.ref(this.nomeImagem);
    const task = ref.put(blob);

   task.snapshotChanges().pipe(
       finalize(() =>{  this.downloadUri = ref.getDownloadURL(); this.mostraDetalhesImg()})
   ).subscribe()

     this.showToast('Sua Imagem está sendo enviada, aguarde.');


  }

  mostraDetalhesImg(){
      this.downloadUri.subscribe(url => this.urlTransition = url )
      this.showToast(`Sua Imagem foi enviada com Sucesso!`)
      this.formularioPreenchido = !this.formularioPreenchido;
  }

  adicionarOcorrencia(){
    this.ocorrencia.url = this.urlTransition
    this.ocorrencia.data = Date.now()
    this.firebaseService.addOcorrenia(this.ocorrencia).then(() => {
      this.router.navigateByUrl('/ocorrencias');
      this.showToast('Sua ocorrência foi enviada com sucesso para análise!')
    }, err => {
      this.showToast('Houve um erro ao enviar a ocorrência :(')
    })
  }



}

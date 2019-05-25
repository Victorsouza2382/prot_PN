import { Component, OnInit } from '@angular/core';
import {Ocorrencia} from '../shared/banco.model';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-ocorrencias',
  templateUrl: './ocorrencias.page.html',
  styleUrls: ['./ocorrencias.page.scss'],
  providers: [FirebaseService]
})
export class OcorrenciasPage implements OnInit {
  mostraCardLost = false;
  mostraCardSelvagem = false;
  mostraCardCrimes = false;
  mostraCardEstrutura = false;
  mostraCardEspecies = false;
  addOcorrencia = false;

  public ocorrencia: Ocorrencia = {
   tipo: '',
   nomeOcorrencia: '',
   local: '',
   descricao: ''
   };

  public alterarTipo: string;

  public id = null;
  private ocorrencias: Observable<Ocorrencia[]>;

  constructor(private activatedRoute: ActivatedRoute, private firebaseService: FirebaseService,
              private router: Router, private toastCtrl: ToastController) { }


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

  adicionarOcorrencia(){
    this.firebaseService.addOcorrenia(this.ocorrencia).then(() =>{
      this.router.navigateByUrl('/ocorrencias');
      this.showToast('Sua ocorrência foi enviada com sucesso para análise!')
    }, err => {
      this.showToast('Houve um erro ao enviar a ocorrência :(')
    })
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }





  verLost() {
    this.mostraCardLost = !this.mostraCardLost;
    this.alterarTipo = 'Nova Especie';
    this.firebaseService.alterarTipo(this.alterarTipo);
  }
  verSelvagem() {
    this.mostraCardSelvagem = !this.mostraCardSelvagem;
    this.alterarTipo = 'Animal Selvagem';
    this.firebaseService.alterarTipo(this.alterarTipo);
  }
  verCrimes() {
    this.mostraCardCrimes = !this.mostraCardCrimes;
    this.alterarTipo = 'Crimes Ambientais';
    this.firebaseService.alterarTipo(this.alterarTipo);
  }
  verEstrutura() {
    this.mostraCardEstrutura = !this.mostraCardEstrutura;
    this.alterarTipo = 'Estrutura do Parque';
    this.firebaseService.alterarTipo(this.alterarTipo);
  }
  verEspecies() {
    this.mostraCardEspecies = !this.mostraCardEspecies;
    this.alterarTipo = 'Nova Especie';
    this.firebaseService.alterarTipo(this.alterarTipo);
  }
  addOcorrencias() {
    this.addOcorrencia = !this.addOcorrencia;
  }
  abrirCamera() {
    alert('Deseja enviar foto?');
  }


}

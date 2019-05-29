import { Component, OnInit } from '@angular/core';
import {EventosService} from '../services/eventos.service';
import { Evento } from '../shared/eventos.model';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-validacao',
  templateUrl: './validacao.page.html',
  styleUrls: ['./validacao.page.scss'],
  providers: [EventosService]
})
export class ValidacaoPage implements OnInit {

  public evento: Evento = {
    titulo: '',
    descricao: '',
    data: '',
  };

  public id = null
  private eventos: Observable<Evento[]>

  public validacao: boolean = false;
  public verFormEventos: boolean = false;

  constructor( private activatedRoute: ActivatedRoute, private eventosService: EventosService,
               private router: Router, private toastCtrl: ToastController ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.eventos = this.eventosService.getEventos()
  }

  ionViewWillEnter() {
    if (this.id) {
      this.eventosService.getEvento(this.id).subscribe(evento => {
        this.evento = evento;
      });
    }
  }
  adicionarEvento(){
    this.eventosService.addEvento(this.evento).then(() =>{
      this.router.navigateByUrl('/validacao');
      this.showToast('Seu evento foi enviado com sucesso!')
    }, err => {
      this.showToast('Houve um erro ao enviar o evento :(')
    })

  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 1500
    }).then(toast => toast.present());
  }







  abrirValidacao(){
    this.validacao = !this.validacao
  }

  abrirFormularioEventos(){
    this.verFormEventos = !this.verFormEventos
  }


}

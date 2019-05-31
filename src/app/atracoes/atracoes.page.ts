import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Evento} from '../shared/eventos.model';
import {EventosService} from '../services/eventos.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-atracoes',
  templateUrl: './atracoes.page.html',
  styleUrls: ['./atracoes.page.scss'],
})
export class AtracoesPage implements OnInit {

  mostraCentro = false;
  mostraIlha = false;
  mostraPiscinas = false;
  mostraEventos = false;

  public evento: Evento = {
    titulo: '',
    descricao: '',
    dataI: null,
    dataF: null
  };


  public id = null
  private eventos: Observable<Evento[]>

  constructor( private activatedRoute: ActivatedRoute, private eventosService: EventosService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.eventos = this.eventosService.getEventos()
    console.log(this.eventos)
  }

  ionViewWillEnter(){
    if(this.id) {
      this.eventosService.getEvento(this.id).subscribe(evento => {
        this.evento = evento
      })
    }
  }



  mostraPiscinasF() {
    this.mostraPiscinas = !this.mostraPiscinas
  }

  mostraEventosF() {
    this.mostraEventos = !this.mostraEventos
  }

  mostraIlhaF() {
    this.mostraIlha = !this.mostraIlha
  }

  mostraCentroF() {
    this.mostraCentro = !this.mostraCentro
  }

}


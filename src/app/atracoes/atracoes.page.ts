import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atracoes',
  templateUrl: './atracoes.page.html',
  styleUrls: ['./atracoes.page.scss'],
})
export class AtracoesPage implements OnInit {
  slideOpts = {effect: 'flip'};

  mostraCentro = false;
  mostraIlha = false;
  mostraPiscinas = false;
  mostraEventos = false;

  constructor() { }

  ngOnInit() {
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


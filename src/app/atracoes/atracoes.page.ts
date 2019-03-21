import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atracoes',
  templateUrl: './atracoes.page.html',
  styleUrls: ['./atracoes.page.scss'],
})
export class AtracoesPage implements OnInit {
  slideOpts = {effect: 'flip'};
  infoCentro = false;
  infoIlhaMeditacao = false;
  infoPiscina1 = false;
  infoPiscina2 = false;
  mostraPiscinas = false;
  mostraOutras = false;

  constructor() { }

  ngOnInit() {
  }

  infoCentroF() {
    this.infoCentro = !this.infoCentro
  }
  infoIlhaMeditacaoF(){
    this.infoIlhaMeditacao = !this.infoIlhaMeditacao
  }

  infoPiscina1F(){
    this.infoPiscina1 = !this.infoPiscina1
  }

  infoPiscina2F(){
    this.infoPiscina2 = !this.infoPiscina2
  }
  mostraPiscinasF() {
    this.mostraPiscinas = !this.mostraPiscinas
  }
  mostraOutrasF() {
    this.mostraOutras = !this.mostraOutras
  }

}


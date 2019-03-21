import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ocorrencias',
  templateUrl: './ocorrencias.page.html',
  styleUrls: ['./ocorrencias.page.scss'],
})
export class OcorrenciasPage implements OnInit {
  mostraCardLost = false;
  mostraCardSelvagem = false;
  mostraCardCrimes = false;
  mostraCardEstrutura = false;
  mostraCardEspecies = false;
  addOcorrencia = false;
  titulo = 'Animais Perdidos';
  constructor() { }
  verLost() {
    this.mostraCardLost = !this.mostraCardLost;
  }
  verSelvagem() {
    this.mostraCardSelvagem = !this.mostraCardSelvagem;
  }
  verCrimes() {
    this.mostraCardCrimes = !this.mostraCardCrimes;
  }
  verEstrutura() {
    this.mostraCardEstrutura = !this.mostraCardEstrutura;
  }
  verEspecies() {
    this.mostraCardEspecies = !this.mostraCardEspecies;
  }
  addOcorrencias() {
    this.addOcorrencia = !this.addOcorrencia;
  }
  abrirCamera() {
    alert('Deseja enviar foto?');
  }

  ngOnInit() {
  }

}

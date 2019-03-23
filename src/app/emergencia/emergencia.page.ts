import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emergencia',
  templateUrl: './emergencia.page.html',
  styleUrls: ['./emergencia.page.scss'],
})
export class EmergenciaPage implements OnInit {
  addOcorrencia = false;

  constructor() { }

  ngOnInit() {
  }

  addOcorrencias() {
    this.addOcorrencia = !this.addOcorrencia;
  }

}

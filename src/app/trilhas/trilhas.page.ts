import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trilhas',
  templateUrl: './trilhas.page.html',
  styleUrls: ['./trilhas.page.scss'],
})
export class TrilhasPage implements OnInit {

  mostrarT1 = false;
  mostrarT2 = false;
  mostrarT3 = false;

  constructor() { }

  ngOnInit() {
  }

  mostrarT1F(){
    this.mostrarT1 = !this.mostrarT1
  }
  mostrarT2F(){
    this.mostrarT2 = !this.mostrarT2
  }
  mostrarT3F(){
    this.mostrarT3 = !this.mostrarT3
  }

}

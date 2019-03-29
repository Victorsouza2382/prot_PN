import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {Card} from '../shared/card.model';
import {CARDS} from './mock';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public cards: Card[] = CARDS;
  public outro: Array<number> = [0, 1, 2, 3, 4, 5];
  public card1: Card;
  public card2: Card;
  public card3: Card;
  public card4: Card;
  public card5: Card;
  public card6: Card;

  public alteraFundo: number = 0;
  public fundo0: boolean = false;
  public fundo1: boolean = false;
  public fundo2: boolean = false;
  public fundo3: boolean = false;
  public fundo4: boolean = false;
  public fundo5: boolean = false;
  public fundo6: boolean = false;
  public fundo7: boolean = false;
  public fundo8: boolean = false;
  public fundo9: boolean = false;



  constructor(public router: Router) {
    this.card1 = this.cards[this.outro[0]];
    this.card2 = this.cards[this.outro[1]];
    this.card3 = this.cards[this.outro[2]];
    this.card4 = this.cards[this.outro[3]];
    this.card5 = this.cards[this.outro[4]];
    this.card6 = this.cards[this.outro[5]];
  }

  ngOnInit() {

  }

  abrirOcorrencias() {
    this.router.navigateByUrl(`/ocorrencias`);
  }
  abrirTrilhas() {
    this.router.navigateByUrl(`/trilhas`);
  }
  abrirAtracoes() {
    this.router.navigateByUrl(`/atracoes`);
  }
  abrirIcmbio() {
    this.router.navigateByUrl(`/icmbio`);
  }
  abrirEmergencia(){
    this.router.navigateByUrl(`/emergencia`)
  }
  abrirAvisos(){
    this.router.navigateByUrl(`/avisos`)
  }

  abrirValidacao(){
    this.router.navigateByUrl(`/validacao`)
  }

  mudafundo() {

    if (this.alteraFundo === 9) {
      this.alteraFundo = -1;
    }

    this.alteraFundo++;

    if (this.alteraFundo === 0) {
      this.fundo9 = !this.fundo9;
      this.fundo0 = !this.fundo0
    } else {
      if (this.alteraFundo === 1) {
        this.fundo0 = !this.fundo0;
        this.fundo1 = !this.fundo1
      } else {
        if (this.alteraFundo === 2) {
          this.fundo1 = !this.fundo1;
          this.fundo2 = !this.fundo2
        } else {
          if (this.alteraFundo === 3) {
            this.fundo2 = !this.fundo2;
            this.fundo3 = !this.fundo3;
          } else {
            if (this.alteraFundo === 4) {
              this.fundo3 = !this.fundo3;
              this.fundo4 = !this.fundo4;
            } else {
              if (this.alteraFundo === 5){
                this.fundo4 = !this.fundo4;
                this.fundo5 = !this.fundo5;
              } else {
                if (this.alteraFundo === 6) {
                  this.fundo5 = !this.fundo5;
                  this.fundo6 = !this.fundo6;
                } else {
                  if (this.alteraFundo === 7) {
                    this.fundo6 = !this.fundo6;
                    this.fundo7 = !this.fundo7;
                } else {
                    if (this.alteraFundo === 8) {
                      this.fundo7 = !this.fundo7;
                      this.fundo8 = !this.fundo8;
                  } else {
                      if (this.alteraFundo === 9) {
                        this.fundo8 = !this.fundo8;
                        this.fundo9 = !this.fundo9;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

    }
  }


}

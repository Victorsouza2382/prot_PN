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
  public outro: Array<number> = [0, 1, 2, 3,4];
  public card1: Card;
  public card2: Card;
  public card3: Card;
  public card4: Card;
  public card5: Card;

  constructor(public router: Router) {
    this.card1 = this.cards[this.outro[0]];
    this.card2 = this.cards[this.outro[1]];
    this.card3 = this.cards[this.outro[2]];
    this.card4 = this.cards[this.outro[3]];
    this.card5 = this.cards[this.outro[4]];
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


}

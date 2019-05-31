import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Avisos} from '../shared/avisos.model';
import {AvisosService} from '../services/avisos.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.page.html',
  styleUrls: ['./avisos.page.scss'],
})
export class AvisosPage implements OnInit {

  public id = null
  private avisos: Observable<Avisos[]>

  constructor(private activatedRoute: ActivatedRoute, private avisosService: AvisosService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.avisos = this.avisosService.getAvisos()
    console.log(this.avisos)
  }

}

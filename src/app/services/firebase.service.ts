import { Injectable } from '@angular/core';
import { Ocorrencia} from '../shared/banco.model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  public tipo = '';
  private ocorrencias: Observable<Ocorrencia[]>;
  private ocorrenciaCollection: AngularFirestoreCollection<Ocorrencia>;


  constructor(private afs: AngularFirestore, private afStorage: AngularFireStorage) {

    this. ocorrenciaCollection = this.afs.collection<Ocorrencia>('ocorrencias', ref => ref.orderBy('nomeOcorrencia'));
    this.ocorrencias = this.ocorrenciaCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ...data}
          })
        }));
  }

    alterarTipo(tipo): void {
        this.tipo = tipo;
        console.log(this.tipo)

        //    Consigo trazer o valor até aqui! Agora falta eu conseguir passar ele para o this.tipo!
    }

    getOcorrenciasPorTipo(): Observable<Ocorrencia[]>{
      console.log('Inicio da Função: ', this.tipo)
        this. ocorrenciaCollection = this.afs.collection<Ocorrencia>('ocorrencias', ref => ref.where('tipo', '==', `${this.tipo}`));
        this.ocorrencias = this.ocorrenciaCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return {id, ...data}
                })
            }));

        return this.ocorrencias;
    }




    getOcorrencias(): Observable<Ocorrencia[]>{
        return this.ocorrencias
    }


    getOcorrencia(id: string): Observable<Ocorrencia>{
        return this.ocorrenciaCollection.doc<Ocorrencia>(id).valueChanges().pipe(
            take(1),
            map(ocorrencia => {
                ocorrencia.id = id;
                return ocorrencia
            })
        )
    }

    addOcorrenia(form: Ocorrencia): Promise<DocumentReference>{
        return this.ocorrenciaCollection.add(form);
    }

    deleteOcorrencia(id: string): Promise<void>{
        return this.ocorrenciaCollection.doc(id).delete()
    }


}

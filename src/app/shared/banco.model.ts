import {Observable} from 'rxjs';

export class Ocorrencia {
    constructor (
        public tipo: string,
        public nomeOcorrencia: string,
        public local: string,
        public descricao: string,
        public enderecoImagem?: Observable<string>,
        public id?: string) {}
}

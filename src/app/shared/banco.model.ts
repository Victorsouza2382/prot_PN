import {Observable} from 'rxjs';

export class Ocorrencia {
    constructor (
        public tipo: string,
        public nomeOcorrencia: string,
        public local: string,
        public data: number,
        public url: string,
        public id?: string) {}
}

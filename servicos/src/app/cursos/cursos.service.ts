import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

    getCursos() {
        return  ['Angular', 'React', 'Flutter'];
    }

}
//todo serviço com @Injectable tem que ser declarado no providers:[] do modulo app.module
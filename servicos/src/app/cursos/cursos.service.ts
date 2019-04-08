import { Injectable, EventEmitter } from '@angular/core';

import { LogService } from './../shared/log.service';

@Injectable()
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();

  private cursos: string[] = ['Angular', 'React', 'Flutter'];

  constructor(private logService: LogService) {
    console.log('CursosServices');
  }

  getCursos() {
    this.logService.consoleLog('obtendo cursos');
    return  this.cursos;
  }

  addCurso(curso: string) {
    this.logService.consoleLog(`adicionando um novo curso: ${curso}`);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
  }

}
//todo serviço com @Injectable tem que ser declarado no providers:[] do modulo local ou global(app.module)

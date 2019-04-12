import { Aluno } from './aluno';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: Aluno[] = [
    {id: 1, nome: 'Aluno 01', email: 'aluno01@email.com'},
    {id: 2, nome: 'Aluno 02', email: 'aluno02@email.com'},
    {id: 3, nome: 'Aluno 03', email: 'aluno03@email.com'},
    {id: 4, nome: 'Aluno 04', email: 'aluno04@email.com'},
    {id: 2, nome: 'Aluno 05', email: 'aluno05@email.com'},
    {id: 3, nome: 'Aluno 06', email: 'aluno06@email.com'},
    {id: 4, nome: 'Aluno 07', email: 'aluno07@email.com'},
    {id: 5, nome: 'Aluno 08', email: 'aluno08@email.com'}
  ];

  constructor() { }

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: number) {
    let aalunos = this.getAlunos();

    for (let i = 0; i < aalunos.length; i++) {
      let aluno = aalunos[i];

      if (aluno.id == id) {
        return aalunos[i]
      }
    }
    return null;
  }
}

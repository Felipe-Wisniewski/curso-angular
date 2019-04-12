import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Aluno } from '../aluno';
import { AlunosService } from './../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno: Aluno;

  subscription: Subscription;

  constructor(
    private alunosService: AlunosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    /* this.subscription = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id);
      }
    ); */
    console.log('ngOnInit: AlunoDetalheComponent');

    this.subscription = this.route.data.subscribe(
      (detail: {aluno: Aluno}) => {
        console.log('detail.aluno: AlunoDetalheComponent');
        this.aluno = detail.aluno;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

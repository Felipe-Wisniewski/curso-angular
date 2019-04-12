import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosGuard } from './alunos-guards/alunos.guard';
import { AlunosDeactivateGuard } from './alunos-guards/alunos-deactivate.guard';
import { AlunoDetalheResolver } from './alunos-guards/aluno-detalhe.resolver';

const alunosRoutes: Routes = [
  { path: '', component: AlunosComponent,
    canActivateChild: [AlunosGuard],
    children: [
      { path: 'novo',        component: AlunoFormComponent },
      { path: ':id',         component: AlunoDetalheComponent,
        resolve: { aluno: AlunoDetalheResolver } },
      { path: ':id/editar',  component: AlunoFormComponent,
        canDeactivate: [AlunosDeactivateGuard] }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }

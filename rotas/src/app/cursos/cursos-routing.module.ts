import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const cursosRoutes: Routes = [
  { path: '',             component: CursosComponent },
  { path: 'notfound/:id', component: CursoNaoEncontradoComponent},
  { path: ':id',    component: CursoDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }

// import { AlunosGuard } from './alunos/alunos.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes  = [
  { path: 'cursos',
    loadChildren: './cursos/cursos.module#CursosModule',
    canActivate: [AuthGuard],
    // canActivateChild: [CursosGuard],
    canLoad: [AuthGuard]
   },

  { path: 'alunos',
    loadChildren: './alunos/alunos.module#AlunosModule',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard] },

  { path: 'login',
    component: LoginComponent },

  { path: '',
    component: HomeComponent,
    canActivate: [AuthGuard] },

  { path: '**',
    component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

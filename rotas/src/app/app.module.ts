import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
// import { AlunosModule } from './alunos/alunos.module';
// import { CursosModule } from './cursos/cursos.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    // CursosModule,
    // AlunosModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

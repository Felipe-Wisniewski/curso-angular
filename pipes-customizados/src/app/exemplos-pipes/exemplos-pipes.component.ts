import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  book: any = {
    title: 'Learn Angular',
    rating: 4.54321,
    pages: 390,
    price: 39.98,
    date: new Date(2018, 5 , 23),
    url: 'http://angular.io'
  }

  livros: string[] = ['Angular', 'Ionic', 'Java'];

  filtro: string;

  asyncValue = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000)
  });

  asyncValue2 = interval(2000).pipe(map(valor => 'Valor assíncrono 2'));

  constructor() { }

  addCurso(curso: string) {
    this.livros.push(curso);
  }

  filtrarCursos() {
    if (this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.livros;
    }

    return this.livros.filter((v) => {
      if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})

export class DataBindingComponent implements OnInit {

  url = 'http://meusite.com'
  cursoAngular = true;
  urlImage = 'http://lorempixel.com/400/200/'

  constructor() { }

  getValor() {
    return 2 * 2;
  }

  getCurso() {
    return true;
  }

  ngOnInit() {
  }

}

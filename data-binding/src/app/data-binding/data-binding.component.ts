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
  valorAtualInput: string;
  valorSalvo: string;
  isMouseOver: boolean = false;
  
  nomeDoCurso: string = 'Angular';

  valorInicial: number = 10;

  constructor() { }

  onMudouValor(evento) {
    console.log(evento);
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtualInput = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  botaoClicado() {
    alert("botão clicado!");
  }

  getValor() {
    return 2 * 2;
  }

  getCurso() {
    return true;
  }

  ngOnInit() {
  }

}

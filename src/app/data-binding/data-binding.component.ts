import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.training'
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com/400/200/nature'
  valorAtual: string;
  valorSalvo: string;
  isMouseOver: boolean = false;

  nome: string = 'abc';

  pessoa: any = {
    nome: 'def',
    idade: 1
  }

  nomeDoCurso: string = 'Angular';

  valorInicial: number = 15;

  constructor() { }

  getValor() {
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado() {
    alert("Botão Clicado!!!");
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  OnMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento) {
    console.log(evento.novoValor);
  }

  ngOnInit() {
  }

}

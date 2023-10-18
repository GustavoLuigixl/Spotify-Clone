import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscasr-recentes',
  templateUrl: './buscasr-recentes.component.html',
  styleUrls: ['./buscasr-recentes.component.css']
})
export class BuscasrRecentesComponent implements OnInit {

  pesquisasRecentes = [
    'Top Corea', 'Top Twice The Best',
    'Top Funckc', 'Top Traps nacionais'
  ];

  campoPesquisa = '';

  constructor(){

  }

  ngOnInit(): void {
      
  }

  definirPesquisa(pesquisa: string){
    this.campoPesquisa = pesquisa;
  }

}

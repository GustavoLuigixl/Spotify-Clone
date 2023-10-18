import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-artistas-item-imagem',
  templateUrl: './artistas-item-imagem.component.html',
  styleUrls: ['./artistas-item-imagem.component.css']
})
export class ArtistasItemImagemComponent implements OnInit {

  @Input()
  imagemSrc = '';


  @Output()
  click = new EventEmitter<void>();


  constructor(){

  }

  ngOnInit(): void {
      
  }

  onClick(){
    this.click.emit();
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { newMusica } from 'src/app/common/factories';
import { IMusica } from 'src/app/interfaces/IMusica';
import { PlayerService } from 'src/app/services/player.service';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  playIcone = faPlay;

  musicas: IMusica[] = []
  musicaAtual: IMusica = newMusica();

  subs: Subscription [] = [];

  constructor(private spotifyService: SpotifyService, private playerService: PlayerService){

  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  ngOnInit(): void {
    this.obterMusicas();  
    this.obterMusicaAtual();
  }

  async obterMusicas(){
    this.musicas = await this.spotifyService.buscarMusicas();
    console.log(this.musicas);
    
  }

  obterMusicaAtual(){
    const sub = this.playerService.musicaAtual.subscribe(musica =>{
      this.musicaAtual = musica;
      console.log('Musica atual', this.musicaAtual);
    });

    this.subs.push(sub)
  }

  obterArtistas(musica: IMusica){
    return musica.artistas.map(artista => artista.nome).join(', ');
  }

  async executarMusica(musica: IMusica){
    await this.spotifyService.executarMusica(musica.id);
    this.playerService.definirMusicaAtual(musica);
  }
}

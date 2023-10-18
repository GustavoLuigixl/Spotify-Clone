import { Component, OnDestroy, OnInit } from '@angular/core';
import { newMusica } from 'src/app/common/factories';
import { IMusica } from 'src/app/interfaces/IMusica';
import { PlayerService } from 'src/app/services/player.service';
import { faPause, faPlay, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-p-music',
  templateUrl: './p-music.component.html',
  styleUrls: ['./p-music.component.css']
})
export class PMusicComponent implements OnInit, OnDestroy {

  musica: IMusica = newMusica();
  subs: Subscription[] = [];

  anteriorIcone = faStepBackward;
  proximoIcone = faStepForward;
  playIcone = faPlay;
  pauseIcone = faPause;

  constructor(private playerService: PlayerService){

  }

  ngOnInit(): void {
    this.obterMusicaTocando();
  }

  ngOnDestroy(): void {
      this.subs.forEach(sub => sub.unsubscribe());
  }

  obterMusicaTocando(){
    const sub = this.playerService.musicaAtual.subscribe(musica =>{
      this.musica = musica;
    });

    this.subs.push(sub);
  }
}

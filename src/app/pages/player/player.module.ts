import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
import { PlayerRotas } from './player.routes';
import { PainelEsquerdoComponent } from 'src/app/components/painel-esquerdo/painel-esquerdo.component';
import { BotaoMenuComponent } from 'src/app/components/botao-menu/botao-menu.component';
import { TopArtistaComponent } from 'src/app/components/top-artista/top-artista.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RodapeUsuarioComponent } from 'src/app/components/rodape-usuario/rodape-usuario.component'
import { HomeComponent } from '../home/home.component';
import { PainelDireitoComponent } from 'src/app/components/painel-direito/painel-direito.component';
import {  BuscasrRecentesComponent } from 'src/app/components/buscasr-recentes/buscasr-recentes.component';
import { FormsModule } from '@angular/forms';
import { TopArtistasComponent} from 'src/app/components/top-artistas/top-artistas.component';
import { ArtistasItemImagemComponent } from 'src/app/components/artistas-item-imagem/artistas-item-imagem.component';
import { PMusicComponent } from 'src/app/components/p-music/p-music.component';




@NgModule({
  declarations: [
    PlayerComponent,
    PainelEsquerdoComponent,
    BotaoMenuComponent,
    RodapeUsuarioComponent,
    HomeComponent,
    TopArtistaComponent,
    PainelDireitoComponent,
    BuscasrRecentesComponent,
    TopArtistasComponent,
    ArtistasItemImagemComponent,
    PMusicComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild(PlayerRotas),
    FormsModule
    
  ]
})
export class PlayerModule { }

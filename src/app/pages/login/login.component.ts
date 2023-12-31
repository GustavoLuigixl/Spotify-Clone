import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private spotifyServices: SpotifyService, private router: Router,){}

  ngOnInit():void{
    this.verificarTokenUrlCallback();
  }

  verificarTokenUrlCallback(){
    const token = this.spotifyServices.obterTokenUrlCallback();
    if(!!token){
      this.spotifyServices.definirAccessToken(token);
      this.router.navigate(['/player/home']);
    }
  }

  abrirLogin(){
    window.location.href = this.spotifyServices.obterUrlLogin();
  }
}

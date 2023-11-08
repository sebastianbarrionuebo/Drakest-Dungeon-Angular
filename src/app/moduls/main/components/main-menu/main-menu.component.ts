import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {

  constructor(private router:Router,private authService:AuthService) {

  }

  irAHeroes(){
    this.router.navigate(["/main/heroes"])
  }

  irADungeons() {
    this.router.navigate(["/main/dungeons"])
  }

  irAUsuario() {
    this.router.navigate(["/main/usuario"]);
  }

  cerrarSecion(){
    this.authService.logout();
    this.router.navigate(["/landing"]);
  }
}

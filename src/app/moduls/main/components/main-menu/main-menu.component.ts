import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { EntidadService } from 'src/app/core/services/entidad.service';
import { EquipoService } from 'src/app/core/services/equipo.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit{

  constructor(private router:Router,private authService:AuthService, private entidadService:EntidadService, private equipoService:EquipoService) {

  }

  irAHeroes() {
    this.router.navigate(["/main/heroes/nuevo-equipo"])
  }

  irAEquipos() {
    this.router.navigate(["/main/equipos"])
  }

  irADungeons() {
    this.router.navigate(["/main/dungeons"])
  }

  irAUsuario() {
    this.router.navigate(["/main/usuario"]);
  }

  cerrarSecion(){
    this.authService.logout();
    this.equipoService.logOut();
    this.router.navigate(["/landing"]);
  }



  
  ngOnInit(): void {
    this.entidadService.getEntidades();
  }
}

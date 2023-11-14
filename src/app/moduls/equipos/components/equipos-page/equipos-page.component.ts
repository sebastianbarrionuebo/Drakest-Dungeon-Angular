import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { EntidadService } from 'src/app/core/services/entidad.service';
import { EquipoService } from 'src/app/core/services/equipo.service';

@Component({
  selector: 'app-equipos-page',
  templateUrl: './equipos-page.component.html',
  styleUrls: ['./equipos-page.component.css']
})
export class EquiposPageComponent implements OnInit{


  constructor(private router:Router,public equipoService:EquipoService, private authService:AuthService) {}


  irAMain() {
    this.router.navigate(['/main'])
  }

  ngOnInit(): void {
    this.equipoService.getEquipos(this.authService.user.id);
  }
}

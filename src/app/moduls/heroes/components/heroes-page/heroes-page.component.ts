import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntidadService } from 'src/app/core/services/entidad.service';
import { EquipoService } from 'src/app/core/services/equipo.service';

@Component({
  selector: 'app-heroes-page',
  templateUrl: './heroes-page.component.html',
  styleUrls: ['./heroes-page.component.css']
})
export class HeroesPageComponent implements OnInit{
  public tipe:String = '';

  constructor(public entidadService:EntidadService,private ActivateRoute:ActivatedRoute,private equipoService:EquipoService) {
  }


  heroSeleccionado(id:Number) {
    this.entidadService.heroStats = this.entidadService.listHeroes.find(hero => hero.idEntidad === id);
  }

  verificarFuncion() {
    if(this.tipe == 'nuevo-equipo') {
      this.equipoService.resetEquipo();
    }
  }
  
  ngOnInit(): void {
    this.ActivateRoute.params.subscribe( params => {
      this.tipe = params['class'];
    })
    this.verificarFuncion();
  }
}

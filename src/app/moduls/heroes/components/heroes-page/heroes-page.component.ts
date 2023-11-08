import { Component } from '@angular/core';
import { Entidad } from 'src/app/core/models';
import { EntidadService } from 'src/app/core/services/entidad.service';

@Component({
  selector: 'app-heroes-page',
  templateUrl: './heroes-page.component.html',
  styleUrls: ['./heroes-page.component.css']
})
export class HeroesPageComponent {


  constructor(public entidadServ:EntidadService) {
    this.entidadServ.getEntidades()
  }


  heroSeleccionado(id:Number) {
    this.entidadServ.heroStats = this.entidadServ.listHeroes.find(hero => hero.idEntidad === id);
  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EntidadService } from 'src/app/core/services/entidad.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {
  @Output() idHeroStats: EventEmitter<Number> = new EventEmitter();


  constructor(public entidadService:EntidadService) {
  }

  
  abrirAtributos(id:Number){
    this.idHeroStats.emit(id);
  }


}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Entidad } from 'src/app/core/models';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {

  @Input() listaHeroes: Array<Entidad> = []
  @Output() idHeroStats: EventEmitter<Number> = new EventEmitter();

  constructor() {
  }

  abrirAtributos(id:Number){
    this.idHeroStats.emit(id);
  }


}

import { Component, Input } from '@angular/core';
import { Entidad } from 'src/app/core/models';

@Component({
  selector: 'app-hero-stats',
  templateUrl: './hero-stats.component.html',
  styleUrls: ['./hero-stats.component.css']
})
export class HeroStatsComponent {

  @Input() heroEstadisitca?:Entidad;


  constructor() {
  }




}

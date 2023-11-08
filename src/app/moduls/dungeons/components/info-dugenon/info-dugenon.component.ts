import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Equipo, Nivel } from 'src/app/core/models';

@Component({
  selector: 'app-info-dugenon',
  templateUrl: './info-dugenon.component.html',
  styleUrls: ['./info-dugenon.component.css']
})
export class InfoDugenonComponent {
  @Input() dungeon?:any;

  constructor(private router:Router) {
  }


  irAEquipo(team:Nivel) {
    this.router.navigate([`/main/equipo/:monstruo/${team.monstruos?.idEntidad1}/${team.monstruos?.idEntidad2}/${team.monstruos?.idEntidad3}`]);
  }


}

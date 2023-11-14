import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Entidad } from 'src/app/core/models';
import { HeroAssignComponent } from '../hero-assign/hero-assign.component';

@Component({
  selector: 'app-hero-stats',
  templateUrl: './hero-stats.component.html',
  styleUrls: ['./hero-stats.component.css']
})
export class HeroStatsComponent {
  @Input() entidad?:Entidad = new Entidad();

  constructor(private matDialog:MatDialog) {
  }


  asignarEquipo(hero:Entidad) {
    const dialogRef = this.matDialog.open(HeroAssignComponent,{
      data: hero
    })
    dialogRef.afterClosed().subscribe({
      next: (result: any) => {
        console.log('El cuadro de diálogo se ha cerro:', result);
      }
    })
  }


}

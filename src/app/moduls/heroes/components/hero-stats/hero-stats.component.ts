import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Entidad } from 'src/app/core/models';
import { EquipoService } from 'src/app/core/services/equipo.service';
import { EditEquipoComponent } from 'src/app/moduls/equipo/components/edit-equipo/edit-equipo.component';

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
    const dialogRef = this.matDialog.open(EditEquipoComponent,{
      data: hero
    })
    dialogRef.afterClosed().subscribe({
      next: (result: any) => {
        console.log('El cuadro de diálogo se ha cerro:', result);
      }
    })
  }


}

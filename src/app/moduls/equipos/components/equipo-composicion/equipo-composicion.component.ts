import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EquipoHeroes } from 'src/app/core/models';
import { EquipoService } from 'src/app/core/services/equipo.service';

@Component({
  selector: 'app-equipo-composicion',
  templateUrl: './equipo-composicion.component.html',
  styleUrls: ['./equipo-composicion.component.css']
})
export class EquipoComposicionComponent{
  @Input() equipoHeroe:EquipoHeroes = new EquipoHeroes();


  constructor(private equipoService:EquipoService, private router:Router) {
  }


  editarEquipo() {
    this.equipoService.comenzarEditEquipo(this.equipoHeroe);
    this.router.navigate(['/main/heroes/editar-equipo']);
  }


  borrarEquipo() {
    if (typeof this.equipoHeroe?.id === 'number') {
      this.equipoService.deletEquipo(this.equipoHeroe?.id).subscribe({
        next: (resolve) => {
          console.log(resolve);
        }
      });
    }
  }


}

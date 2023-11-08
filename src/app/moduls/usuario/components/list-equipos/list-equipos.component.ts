import { Component } from '@angular/core';
import { EntidadService } from 'src/app/core/services/entidad.service';
import { EquipoService } from 'src/app/core/services/equipo.service';

@Component({
  selector: 'app-list-equipos',
  templateUrl: './list-equipos.component.html',
  styleUrls: ['./list-equipos.component.css']
})
export class ListEquiposComponent {

  constructor(public equipService:EquipoService, private entidadService:EntidadService) {
  }


  public getNombreHeroe(idEnty:Number){
    return this.entidadService.getHeroName(idEnty);
  }


  public borrarEquipo(id:Number) {
    this.equipService.deletEquipo(id).subscribe({
      next: (resp) =>{
        console.log(resp)
      },
      error: (error) => {console.log(error)}
    })
  }
 
}

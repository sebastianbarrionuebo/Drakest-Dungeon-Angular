import { Component, OnInit } from '@angular/core';
import { EntidadService } from 'src/app/core/services/entidad.service';
import { EquipoService } from 'src/app/core/services/equipo.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit{

  constructor(private equipoService:EquipoService, private entidadService:EntidadService) {

  }




  ngOnInit(): void {
    this.entidadService.getEntidades();
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveEnd, Router } from '@angular/router';
import { Entidad, Equipo } from 'src/app/core/models';
import { EntidadService } from 'src/app/core/services/entidad.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit{
  private team:Equipo = new Equipo();
  private tipe:String = '';
  public entidad1:Entidad = new Entidad();
  public entidad2:Entidad = new Entidad();
  public entidad3:Entidad = new Entidad();


  constructor(private router:Router,private ActivateRoute:ActivatedRoute, private entiService:EntidadService) {
  }


  irAMain(){
    this.router.navigate(['/main'])
  }




  ngOnInit(): void {
    this.ActivateRoute.params.subscribe( params => {
      this.tipe = params['class'];
      this.team.idEntidad1 = params['id1'];
      this.team.idEntidad2 = params['id2'];
      this.team.idEntidad3 = params['id3'];
    })
    this.entiService.getEntidad(Number(this.team.idEntidad1),'monstruos').subscribe({
      next: (resolve) => {
        this.entidad1 = resolve[0];
      },
      error: (error) => {console.log(error)}
    });
    
    this.entiService.getEntidad(Number(this.team.idEntidad2),'monstruos').subscribe({
      next: (resolve) => {
        this.entidad2 = resolve[0];
      },
      error: (error) => {console.log(error)}
    });
    
    this.entiService.getEntidad(Number(this.team.idEntidad3),'monstruos').subscribe({
      next: (resolve) => {
        this.entidad3 = resolve[0];
      },
      error: (error) => {console.log(error)}
    });
  }

}

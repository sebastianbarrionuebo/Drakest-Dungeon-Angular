import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entidad, Equipo } from 'src/app/core/models';
import { EntidadService } from 'src/app/core/services/entidad.service';

@Component({
  selector: 'app-info-nivel',
  templateUrl: './info-nivel.component.html',
  styleUrls: ['./info-nivel.component.css']
})
export class InfoNivelComponent implements OnInit{
  private team:Equipo = new Equipo();
  private idEntidad1:String = '';
  private idEntidad2:String = '';
  private idEntidad3:String = '';
  private tipe:String = '';
  public entidad1:Entidad = new Entidad();
  public entidad2:Entidad = new Entidad();
  public entidad3:Entidad = new Entidad();


  constructor(private router:Router,private ActivateRoute:ActivatedRoute, private entiService:EntidadService) {
  }


  irADungeon(){
    this.router.navigate(['/main/dungeons'])
  }




  ngOnInit(): void {
    this.ActivateRoute.params.subscribe( params => {
      this.tipe = params['class'];
      this.idEntidad1 = params['id1'];
      this.idEntidad2 = params['id2'];
      this.idEntidad3 = params['id3'];
    })
    this.entiService.getEntidad(Number(this.idEntidad1),'monstruos').subscribe({
      next: (resolve) => {
        this.entidad1 = resolve[0];
      },
      error: (error) => {console.log(error)}
    });
    
    this.entiService.getEntidad(Number(this.idEntidad2),'monstruos').subscribe({
      next: (resolve) => {
        this.entidad2 = resolve[0];
      },
      error: (error) => {console.log(error)}
    });
    
    this.entiService.getEntidad(Number(this.idEntidad3),'monstruos').subscribe({
      next: (resolve) => {
        this.entidad3 = resolve[0];
      },
      error: (error) => {console.log(error)}
    });
  }

}

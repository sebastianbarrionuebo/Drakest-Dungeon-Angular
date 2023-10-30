import { Component, OnInit } from '@angular/core';
import { Entidad } from 'src/app/core/models';
import { EntidadService } from 'src/app/core/services/entidad.service';

@Component({
  selector: 'app-heroes-page',
  templateUrl: './heroes-page.component.html',
  styleUrls: ['./heroes-page.component.css']
})
export class HeroesPageComponent implements OnInit {

  public listaHeroes:Array<Entidad> = [];
  public heroEstadisitca?:Entidad;


  constructor(private entidadServ:EntidadService) {
    this.entidadServ.getEntidades().subscribe({
      next: (result) =>{
        result.forEach(item => {
          this.listaHeroes?.push(new Entidad(item))
        });
      },
      error: (error) => {console.log(error)}
    })
    this.heroEstadisitca = this.listaHeroes[0];
  }




  heroSeleccionado(id:Number) {
    this.heroEstadisitca = this.listaHeroes.find(hero => hero.idHeroe === id);
  }




  ngOnInit(): void {

  }
}

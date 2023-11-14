import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entidad } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntidadService {
  private baseUrl:String = 'http://localhost:3000';
  public listHeroes:Array<Entidad> = [];
  public heroStats?:Entidad = new Entidad();
  public primerCargaCitas:Boolean = true;


  constructor(private http:HttpClient ) {
  }


  public getEntidades() {
    if(this.primerCargaCitas){
      this.http.get<Entidad[]>(`${this.baseUrl}/heroes`).subscribe({
        next: (result) => {
          result.forEach(item => {
            this.listHeroes.push(new Entidad(item))
          })
          this.heroStats = this.listHeroes[0];
        },
        error: (error) => {console.log(error)}
      });
    }
    this.primerCargaCitas = false;
  }

  
  public getEntidad(id:number,entidad:String): Observable<Entidad[]> {
    return this.http.get<Entidad[]>(`${this.baseUrl}/${entidad}?idEntidad=${id}`);
  }

  public getHeroName(id:Number) {
    let hero:Entidad = new Entidad;
    this.listHeroes.forEach(item => {
      if(item.idEntidad === id) {
        hero = item;
      }
    })
    //const hero = this.listHeroes.find(item => item.idEntidad === id);
    //console.log(this.listHeroes)
    //console.log(hero)
    return hero.name;
  }

  public getHeroe(id:Number):Entidad{
    let heroe:Entidad = new Entidad();
    this.listHeroes.forEach(item => {
        if(item.idEntidad === id) {
          heroe = item
        }
      }
    )
    return heroe;
  }

}

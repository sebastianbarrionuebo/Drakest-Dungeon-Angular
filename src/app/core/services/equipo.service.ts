import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entidad, Equipo, EquipoHeroes } from '../models';
import { MatDialog } from '@angular/material/dialog';
import { EditEquipoComponent } from 'src/app/moduls/equipo/components/edit-equipo/edit-equipo.component';
import { Observable, catchError, map, of } from 'rxjs';
import { EntidadService } from './entidad.service';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  private baseUrl:String = 'http://localhost:3000';
  public listEquipos:Array<EquipoHeroes> = [];

  public userEquipo:EquipoHeroes = new EquipoHeroes();
  public equipo:Equipo = new Equipo();
  
  public retaguardia:Entidad = new Entidad();
  public centro:Entidad = new Entidad();
  public frente:Entidad = new Entidad();

  public retChek:Boolean = false;
  public centChek:Boolean = false;
  public frentChek:Boolean = false;


  constructor(private http:HttpClient) {
  }

  public newEquipoUser() {
    this.userEquipo.idUser = Number(localStorage.getItem('token'));
  }

  public resetEquipo() {
    this.retaguardia = new Entidad();
    this.centro = new Entidad();
    this.frente = new Entidad();
  }
  
  public quitarHeroe(pos:Number){
    switch(pos) {
      case (1):
        this.equipo.idEntidad1 = null;
        this.retaguardia = new Entidad();
        this.retChek = false;
      break;
      case (2):
        this.equipo.idEntidad2 = null;
        this.centro = new Entidad();
        this.centChek = false;
      break;
      case (3):
        this.equipo.idEntidad3 = null;
        this.frente = new Entidad();
        this.frentChek = false;
      break;
    }
  };

  public asignar(pos:Number, hero:Entidad) {
    switch(pos) {
      case 1:
          this.retaguardia = hero;
          this.equipo.idEntidad1 = hero.idEntidad;
          this.retChek = true;
        break
        
      case 2:
        this.centro = hero;
        this.equipo.idEntidad2 = hero.idEntidad;
        this.centChek = true;
        break
        
      case 3:
        this.frente = hero;
        this.equipo.idEntidad3 = hero.idEntidad;
        this.frentChek = true;
        break
    }
  }


  public getEquipos(idUser?:Number) {
    this.http.get<EquipoHeroes[]>(`${this.baseUrl}/equipos`).subscribe({
      next: (resolve) => {
        resolve.forEach(item => {
          if(item.idUser == idUser){
            this.listEquipos.push(new EquipoHeroes(item))
          }
        })
      },
      error: (error) => {console.log(error)}
    });
  };


  public deletEquipo(id:Number):Observable<Boolean> {
    this.listEquipos = this.listEquipos.filter(item => item.id !== id);
    return this.http.delete(`${this.baseUrl}/equipos/${id}`).pipe(
      map(resp => true), 
      catchError(error => of(false))
    );
  }

  public addEquipo():Observable<Boolean> {
    this.newEquipoUser();
    this.userEquipo.equipo = this.equipo;
    this.listEquipos.push(this.userEquipo);
    return this.http.post<Boolean>(`${this.baseUrl}/equipos`, this.userEquipo);
  }


  public logOut() {
    this.listEquipos = [];
  }

  
}
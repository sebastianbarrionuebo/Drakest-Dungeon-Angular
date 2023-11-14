import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entidad, Equipo, EquipoHeroes } from '../models';
import { Observable, catchError, map, of } from 'rxjs';
import { EntidadService } from './entidad.service';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  private baseUrl:String = 'http://localhost:3000';
  ///Lista de todos los equipos del usuario
  public listEquiposHeroes:Array<EquipoHeroes> = [];

  ///Equipo en creacion
  public formandoEquipo:EquipoHeroes = new EquipoHeroes();
  public equipo:Equipo = new Equipo();
  //Boolean de existencia de heroes en las posiciones
  public retChek:Boolean = false;
  public centChek:Boolean = false;
  public frentChek:Boolean = false;


  constructor(private http:HttpClient, private entidadService:EntidadService) {
  }

  public newEquipoUser() {
    this.formandoEquipo.idUser = Number(localStorage.getItem('token'));
  }

  public resetEquipo() {
    this.formandoEquipo = new EquipoHeroes();
    this.equipo.Entidad1 = new Entidad();
    this.equipo.Entidad2 = new Entidad();
    this.equipo.Entidad3 = new Entidad();
    this.retChek = false;
    this.centChek = false;
    this.frentChek = false;
  }
  
  public quitarHeroe(pos:Number){
    switch(pos) {
      case (1):
        this.equipo.Entidad1 = new Entidad();
        this.retChek = false;
      break;
      case (2):
        this.equipo.Entidad2 = new Entidad();
        this.centChek = false;
      break;
      case (3):
        this.equipo.Entidad3 = new Entidad();
        this.frentChek = false;
      break;
    }
  };

  public asignar(pos:Number, hero:Entidad) {
    switch(pos) {
      case 1:
          this.equipo.Entidad1 = hero;
          this.retChek = true;
        break
        
      case 2:
        this.equipo.Entidad2 = hero;
        this.centChek = true;
        break
        
      case 3:
        this.equipo.Entidad3 = hero;
        this.frentChek = true;
        break
    }
  }

  comenzarEditEquipo(equipoHeroes:EquipoHeroes) {
    if (equipoHeroes.equipo?.Entidad1 !== undefined && equipoHeroes.equipo?.Entidad1 !== null) {
      this.equipo.Entidad1 = equipoHeroes.equipo?.Entidad1;
    }
    if (equipoHeroes.equipo?.Entidad2 !== undefined && equipoHeroes.equipo?.Entidad2 !== null) {
      this.equipo.Entidad2 = equipoHeroes.equipo?.Entidad2;
    }
    if (equipoHeroes.equipo?.Entidad3 !== undefined && equipoHeroes.equipo?.Entidad3 !== null) {
      this.equipo.Entidad3 = equipoHeroes.equipo?.Entidad3;
    }
    this.retChek = true;
    this.centChek = true;
    this.frentChek = true;
    this.formandoEquipo = equipoHeroes;
  }

  public getEquipos(idUser?:Number) {
    let listaEquipos:Array<EquipoHeroes> = [];
    this.http.get<any[]>(`${this.baseUrl}/equiposHeroes?idUser=${idUser}`).subscribe({
      next: (resolve) => {
        resolve.forEach(item => {
          let team:EquipoHeroes = new EquipoHeroes();
          team.id = item.id;
          team.idUser = item.idUser;
          team.equipo = new Equipo();
          this.entidadService.listHeroes.forEach( item2 => {
            if(item2.idEntidad === item.equipo.idEntidad1){
              if (team.equipo) {
                team.equipo.Entidad1 = new Entidad(item2);;
              }
            }
            if(item2.idEntidad === item.equipo.idEntidad2){
              if (team.equipo) {
                team.equipo.Entidad2 = new Entidad(item2);
              }
            }
            if(item2.idEntidad === item.equipo.idEntidad3){
              if (team.equipo) {
                team.equipo.Entidad3 = new Entidad(item2);
              }
            }
          })

          listaEquipos.push(team);
        })
      },
      error: (error) => {console.log(error)}
    });
    this.listEquiposHeroes = listaEquipos;
  };


  public deletEquipo(id:Number):Observable<Boolean> {
    this.listEquiposHeroes = this.listEquiposHeroes.filter(item => item.id !== id);
    return this.http.delete(`${this.baseUrl}/equiposHeroes/${id}`).pipe(
      map(resp => true), 
      catchError(error => of(false))
    );
  }

  public editEquipo():Observable<Boolean> {
    return this.http.put<boolean>(`${this.baseUrl}/equiposHeroes/${this.formandoEquipo.idUser}`, this.formandoEquipo);
  }

  public addEquipo():Observable<Boolean> {
    if(this.formandoEquipo.id !== null) {
      this.formandoEquipo.equipo = this.equipo;
      this.listEquiposHeroes = this.listEquiposHeroes?.filter(item => item.id !== this.formandoEquipo.id);
      this.listEquiposHeroes.push(this.formandoEquipo);

      let bakEnd = {
        id: this.formandoEquipo.id,
        idUser: this.formandoEquipo.idUser,
        equipo: {
          idEntidad1: this.equipo.Entidad1?.idEntidad,
          idEntidad2: this.equipo.Entidad2?.idEntidad,
          idEntidad3: this.equipo.Entidad3?.idEntidad
        }
      };
      return this.http.put<boolean>(`${this.baseUrl}/equiposHeroes/${this.formandoEquipo.id}`, bakEnd);
    }else{
      this.newEquipoUser();
      this.formandoEquipo.equipo = this.equipo;
      this.listEquiposHeroes.push(this.formandoEquipo);

      let bakEnd = {
        idUser: this.formandoEquipo.idUser,
        equipo: {
          idEntidad1: this.equipo.Entidad1?.idEntidad,
          idEntidad2: this.equipo.Entidad2?.idEntidad,
          idEntidad3: this.equipo.Entidad3?.idEntidad
        }
      };
      return this.http.post<Boolean>(`${this.baseUrl}/equiposHeroes`, bakEnd);
    }
  }

  
  public logOut() {
    this.listEquiposHeroes = [];
  }
  
  
}
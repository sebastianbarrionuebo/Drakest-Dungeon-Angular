import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entidad } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntidadService {
  private baseUrl:String = 'http://localhost:3000';

  constructor(private http:HttpClient ) {
  }

  public getEntidades(): Observable<Entidad[]> {
    return this.http.get<Entidad[]>(`${this.baseUrl}/heroes`);
  }

  public getEntidad(id:number): Observable<Entidad[]> {
    return this.http.get<Entidad[]>(`${this.baseUrl}/heroes?id=${id}`);
  }

  

}

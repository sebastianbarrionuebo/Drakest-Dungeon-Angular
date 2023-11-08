import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { EquipoService } from '../equipo.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  private baseUrl:String = 'http://localhost:3000';
  public user?:any;
  public lalala='lalala';

  constructor(private http: HttpClient, private router:Router, private equipoService:EquipoService) {
  }

  public setUser(userName:String, email:String, password:String){
    let user = { userName, email, password }
    return this.http.post(`${this.baseUrl}/users`, user);
  }

  public getUserOn() {
    if (!this.user) {
      return undefined
    }else {
      return this.user;
    }
  }
  
  public getToAuth(userName:String, password:String) {
    this.http.get<User[]>(`${this.baseUrl}/users?userName=${userName}&password=${password}`).subscribe({
      next: (result) => {
        if(result.length == 1) {
          this.user = result[0];
          localStorage.setItem('token', this.user.id.toString())
          this.equipoService.getEquipos(this.user.id);
          this.router.navigate(["/main"])
        }
      },
      error: (error) => {console.log(error)}
    });
  }

  public logout() {
    this.user = undefined;
    localStorage.removeItem('token');
    this.equipoService.logOut();
  }

}

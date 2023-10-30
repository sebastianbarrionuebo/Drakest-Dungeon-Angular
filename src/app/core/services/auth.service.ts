import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl:String = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  public getToAuth(userName:String, password:String): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users?userName=${userName}&password=${password}`);
  }

  public setUser(userName:String, email:String, password:String){
    let user = { userName, email, password }
    return this.http.post(`${this.baseUrl}/users`, user);
  }
  


}

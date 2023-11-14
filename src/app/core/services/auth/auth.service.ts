import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DialogLoginComponent } from 'src/app/moduls/auth/components/dialog-login/dialog-login.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  private baseUrl:String = 'http://localhost:3000';
  public user?:any;

  constructor(private http: HttpClient, 
    private router:Router,
    private matDialog:MatDialog 
    ) {
  }

  public setUser(userName:String, email:String, password:String){
    let user = { userName, email, password }
    return this.http.post(`${this.baseUrl}/users`, user);
  }

  public editUser(userName:String, email:String, password:String ):Observable<Boolean> {
    this.user.name = userName;
    this.user.email = email;
    this.user.password = password;
    const newUser = {id: this.user.id, userName, email, password};
    return this.http.put<boolean>(`${this.baseUrl}/users/${this.user.id}`, newUser);
  }

  public getUserOn() {
    if (!this.user) {
      return undefined
    }else {
      return this.user;
    }
  }

  isAuthenticated():Boolean {
    let flag:Boolean = true;
    if(localStorage.getItem('token') !== null){
      flag = false
    }
    return flag;
  }
  
  public getToAuth(userName:String, password:String) {
    this.http.get<User[]>(`${this.baseUrl}/users?userName=${userName}&password=${password}`).subscribe({
      next: (result) => {
        if(result.length == 1) {
          this.user = result[0];
          localStorage.setItem('token', this.user.id.toString());
          this.router.navigate(["/main"]);
        }else{
          const dialogRef = this.matDialog.open(DialogLoginComponent,{})
          dialogRef.afterClosed().subscribe({
            next: (result: any) => {
              console.log('El cuadro de diálogo se ha cerro:', result);
            },
            error: (error) => {console.log(error)}
          })
        }
      },
      error: (error) => {console.log(error)}
    });
  }

  public logout() {
    this.user = null;
    localStorage.removeItem('token');
  }

}

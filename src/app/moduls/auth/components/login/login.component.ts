import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup , FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formUser: FormGroup;

  constructor(private router:Router, private fb:FormBuilder, private authService:AuthService) {
    this.formUser = this.fb.group(
      {
        'userName': ['', Validators.required ],
        'password': ['', Validators.required ]
      }
    )
  }


  irRegistro() {
    this.router.navigate(["/auth/register"])
  }

  authInfo() {
    this.authService.getToAuth(this.formUser.get("userName")?.value,this.formUser.get('password')?.value).subscribe({
      next: (result) => {
        if(result.length == 1){
          this.router.navigate(["/main"])
        }
      },
      error: (error) => {console.log(error)}
    })
  }

  get userName(){
    return this.formUser.get("userName") as FormControl;
  }
  
  get password(){
    return this.formUser.get("password") as FormControl;
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup , FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formUser: FormGroup;

  constructor(private fb:FormBuilder, private authService:AuthService, private router:Router) {
    this.formUser = this.fb.group(
      {
        'userName': ['', Validators.required ],
        'email': ['', [Validators.required, Validators.email] ],
        'password': ['', Validators.required ]
      }
    )
  }

  procesarInfo(){
    this.authService.setUser(this.formUser.get('userName')?.value,this.formUser.get('email')?.value,this.formUser.get('password')?.value).subscribe({
      next: (result) => {
        this.router.navigate(["/landing"])
      }
    })
    console.log(this.formUser.value)
  }

  get userName(){
    return this.formUser.get("userName") as FormControl;
  }

  get email(){
    return this.formUser.get("email") as FormControl;
  }
  
  get password(){
    return this.formUser.get("password") as FormControl;
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SharedsModule } from 'src/app/shareds/shareds.module';
import { DialogRegisterComponent } from './components/dialog-register/dialog-register.component';
import { DialogLoginComponent } from './components/dialog-login/dialog-login.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    DialogRegisterComponent,
    DialogLoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedsModule
  ]
})
export class AuthModule { }

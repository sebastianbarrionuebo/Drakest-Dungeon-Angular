import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UserPageComponent } from './components/user-page/user-page.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { SharedsModule } from 'src/app/shareds/shareds.module';
import { EditCampoComponent } from './components/edit-campo/edit-campo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserPageComponent,
    UserInfoComponent,
    EditCampoComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsuarioModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UserPageComponent } from './components/user-page/user-page.component';
import { ListEquiposComponent } from './components/list-equipos/list-equipos.component';
import { UserInfoComponent } from './components/user-info/user-info.component';


@NgModule({
  declarations: [
    UserPageComponent,
    ListEquiposComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }

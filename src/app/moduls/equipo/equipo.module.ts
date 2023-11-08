import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipoRoutingModule } from './equipo-routing.module';
import { EquipoComponent } from './components/equipo/equipo.component';
import { HeroesModule } from '../heroes/heroes.module';
import { EditEquipoComponent } from './components/edit-equipo/edit-equipo.component';


@NgModule({
  declarations: [
    EquipoComponent,
    EditEquipoComponent
  ],
  imports: [
    CommonModule,
    EquipoRoutingModule,
    HeroesModule
  ]
})
export class EquipoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquiposRoutingModule } from './equipos-routing.module';
import { EquiposPageComponent } from './components/equipos-page/equipos-page.component';
import { SharedsModule } from 'src/app/shareds/shareds.module';
import { EquipoComposicionComponent } from './components/equipo-composicion/equipo-composicion.component';


@NgModule({
  declarations: [
    EquiposPageComponent,
    EquipoComposicionComponent
  ],
  imports: [
    CommonModule,
    EquiposRoutingModule,
    SharedsModule
  ]
})
export class EquiposModule { }

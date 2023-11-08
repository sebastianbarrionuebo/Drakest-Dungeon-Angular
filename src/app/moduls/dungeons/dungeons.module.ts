import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DungeonsRoutingModule } from './dungeons-routing.module';
import { DungeonsPageComponent } from './components/dungeons-page/dungeons-page.component';
import { InfoDugenonComponent } from './components/info-dugenon/info-dugenon.component';


@NgModule({
  declarations: [
    DungeonsPageComponent,
    InfoDugenonComponent
  ],
  imports: [
    CommonModule,
    DungeonsRoutingModule
  ]
})
export class DungeonsModule { }

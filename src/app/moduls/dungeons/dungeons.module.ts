import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DungeonsRoutingModule } from './dungeons-routing.module';
import { DungeonsPageComponent } from './components/dungeons-page/dungeons-page.component';
import { InfoDugenonComponent } from './components/info-dugenon/info-dugenon.component';
import { SharedsModule } from 'src/app/shareds/shareds.module';
import { InfoNivelComponent } from './components/info-nivel/info-nivel.component';
import { HeroesModule } from '../heroes/heroes.module';


@NgModule({
  declarations: [
    DungeonsPageComponent,
    InfoDugenonComponent,
    InfoNivelComponent
  ],
  imports: [
    CommonModule,
    DungeonsRoutingModule,
    SharedsModule,
    HeroesModule
  ]
})
export class DungeonsModule { }

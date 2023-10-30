import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesPageComponent } from './components/heroes-page/heroes-page.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroStatsComponent } from './components/hero-stats/hero-stats.component';


@NgModule({
  declarations: [
    HeroesPageComponent,
    HeroListComponent,
    HeroStatsComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }

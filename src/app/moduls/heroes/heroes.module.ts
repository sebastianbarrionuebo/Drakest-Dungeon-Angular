import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesPageComponent } from './components/heroes-page/heroes-page.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroStatsComponent } from './components/hero-stats/hero-stats.component';
import { HeroSelectedComponent } from './components/hero-selected/hero-selected.component';
import { SharedsModule } from 'src/app/shareds/shareds.module';
import { HeroAssignComponent } from './components/hero-assign/hero-assign.component';


@NgModule({
  declarations: [
    HeroesPageComponent,
    HeroListComponent,
    HeroStatsComponent,
    HeroSelectedComponent,
    HeroAssignComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    SharedsModule
  ],
  exports: [
    HeroStatsComponent
  ]
})
export class HeroesModule { }

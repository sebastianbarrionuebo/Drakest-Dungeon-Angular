import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { SharedsModule } from 'src/app/shareds/shareds.module';


@NgModule({
  declarations: [
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedsModule
  ]
})
export class MainModule { }

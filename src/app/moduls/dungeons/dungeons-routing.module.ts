import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DungeonsPageComponent } from './components/dungeons-page/dungeons-page.component';

const routes: Routes = [
  {
    path: '',
    component: DungeonsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DungeonsRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DungeonsPageComponent } from './components/dungeons-page/dungeons-page.component';
import { InfoNivelComponent } from './components/info-nivel/info-nivel.component';

const routes: Routes = [
  {
    path: '',
    component: DungeonsPageComponent
  },
  {
    path: 'nivel/:class/:id1/:id2/:id3',
    component: InfoNivelComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DungeonsRoutingModule { }

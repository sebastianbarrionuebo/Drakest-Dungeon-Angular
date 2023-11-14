import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquiposPageComponent } from './components/equipos-page/equipos-page.component';

const routes: Routes = [
  {
    path: '',
    component: EquiposPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquiposRoutingModule { }

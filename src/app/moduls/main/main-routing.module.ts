import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { authGuard } from 'src/app/core/services/auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainMenuComponent
  },
  {
    path: 'heroes/:class',
    loadChildren: () => import("../heroes/heroes.module").then(m => m.HeroesModule),
  },
  {
    path: 'equipos',
    loadChildren: () => import("../equipos/equipos.module").then(m => m.EquiposModule),
  },
  {
    path: 'dungeons',
    loadChildren: () => import("../dungeons/dungeons.module").then(m => m.DungeonsModule),
  },
  {
    path: 'usuario',
    loadChildren: () => import("../usuario/usuario.module").then(m => m.UsuarioModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

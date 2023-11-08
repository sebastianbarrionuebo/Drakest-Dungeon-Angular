import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/services/auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'landing',
    loadChildren: () => import("./moduls/landing/landing.module").then(m => m.LandingModule)
  },
  {
    path: 'auth',
    loadChildren: () => import("./moduls/auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: 'main',
    loadChildren: () => import("./moduls/main/main.module").then(m => m.MainModule),
    canActivate: [authGuard]
  },
  {
    path: 'main/heroes',
    loadChildren: () => import("./moduls/heroes/heroes.module").then(m => m.HeroesModule),
    canActivate: [authGuard]
  },
  {
    path: 'main/dungeons',
    loadChildren: () => import("./moduls/dungeons/dungeons.module").then(m => m.DungeonsModule),
    canActivate: [authGuard]
  },
  {
    path: 'main/usuario',
    loadChildren: () => import("./moduls/usuario/usuario.module").then(m => m.UsuarioModule),
    canActivate: [authGuard]
  },
  {
    path: 'main/equipo/:class/:id1/:id2/:id3',
    loadChildren: () => import("./moduls/equipo/equipo.module").then(m => m.EquipoModule),
    canActivate: [authGuard]
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

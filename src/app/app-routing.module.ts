import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/services/auth/guards/auth.guard';
import { Error404Component } from './standAlone/error404/error404.component';

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
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

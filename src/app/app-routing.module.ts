import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './moduls/landing/components/landing-page/landing-page.component';
import { MainMenuComponent } from './moduls/main/components/main-menu/main-menu.component';

const routes: Routes = [
  {
    path: 'landing',
    component: LandingPageComponent,
    loadChildren: () => import("./moduls/landing/landing.module").then(m => m.LandingModule)
  },
  {
    path: 'main',
    component: MainMenuComponent,
    loadChildren: () => import("./moduls/main/main.module").then(m => m.MainModule)
  },
  {
    path: 'main/heroes',
    loadChildren: () => import("./moduls/heroes/heroes.module").then(m => m.HeroesModule)
  },
  {
    path: 'auth',
    loadChildren: () => import("./moduls/auth/auth.module").then(m => m.AuthModule)
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

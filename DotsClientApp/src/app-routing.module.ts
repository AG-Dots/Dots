import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PageNotFoundComponent } from './app/pages/page-not-found/page-not-found.component';
// import { GameComponent } from './app/game/game.component';
import { LoginComponent } from './app/pages/login/login.component';
import { RegisterComponent } from './app/pages/register/register.component';

const heroesRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'game', component: GameComponent },
  { path: '',   component: LoginComponent , pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

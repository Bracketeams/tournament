import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TournamentsComponent } from './pages/tournaments/tournaments.component';
import { TournamentComponent } from './tournament/tournament.component';

// Routing goes here.
const routes: Routes = [
  {path: 'login', data: {title: 'Login'}, redirectTo: '/admin/auth', pathMatch: 'full'},

  {path: 'register', data: {title: 'Login'}, redirectTo: '/admin/register', pathMatch: 'full'},

  // Home page routing.
  {path: 'home', component: HomeComponent, data: {title: 'Home',
                                                  description: 'Welcome to bracketeams!'}},

  // Tournaments page routing.
  {path: 'tournaments', component: TournamentsComponent, data: {title: 'Tournaments',
                                                                description: 'You can find all user tournaments here.'}},

  // This routing makes sure that the default route when entering the website is the home page.
  {path: '', redirectTo: "/home", pathMatch: 'full'},

  // Admin module routing.
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

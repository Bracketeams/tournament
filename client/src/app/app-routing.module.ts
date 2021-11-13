import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TournamentsComponent } from './pages/tournaments/tournaments.component';

// Routing goes here.
const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'tournaments', component: TournamentsComponent, data: {title: 'Tournaments'}},
  {path: '', redirectTo: "/home", pathMatch: 'full'}
  //{path: 'tournament/add/:id', component: EditComponent},
  //{path: 'tournament/edit/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

// Routing goes here.
const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: '', redirectTo: "/home", pathMatch: 'full'},
  {path: 'tournament/add/:id', component: EditComponent},
  {path: 'tournament/edit/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

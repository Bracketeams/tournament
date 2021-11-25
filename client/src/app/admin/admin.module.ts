import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminComponent } from './admin.component';
import { DataTablesModule } from "angular-datatables";

import { TournamentEditorComponent } from './tournament-editor/tournament-editor.component';
import { TournamentTableComponent } from './tournament-table/tournament-table.component';
import { PartialsModule } from '../partials/partials.module';

const routing = RouterModule.forChild([
  { path: 'auth', component: AuthComponent, data: {title: 'Login', description: 'Login here to utilize Bracketeams.'}},
  { path: 'register', component: RegistrationComponent, data: {title: 'Sign up', description: 'Create your Bracketeams account here.'}},
  { path: 'main', component: AdminComponent, canActivate: [AuthGuard], data: {title: 'Admin panel', description: 'Bracketeams admin panel.'},
   children: [
      { path: 'Tournaments/:mode/:id', component: TournamentEditorComponent, data: {title: 'Edit Tournament'}, canActivate: [AuthGuard]},
      { path: 'Tournaments/:mode', component: TournamentEditorComponent, data: {title: 'Add Tournament'}, canActivate: [AuthGuard]},
      { path: 'Tournaments', component: TournamentTableComponent, canActivate: [AuthGuard]},
      { path: '**', redirectTo: 'Tournaments' }]
  },
  { path: '**', redirectTo: 'auth' },
]);

@NgModule({
  imports: [CommonModule, FormsModule, DataTablesModule, PartialsModule, routing],
  providers: [AuthGuard],
  declarations: [AuthComponent, RegistrationComponent, AdminComponent, TournamentEditorComponent, TournamentTableComponent]
})
export class AdminModule {}

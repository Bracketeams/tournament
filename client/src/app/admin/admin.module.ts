import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminComponent } from './admin.component';
import { TournamentEditorComponent } from './tournament-editor/tournament-editor.component';
import { TournamentTableComponent } from './tournament-table/tournament-table.component';

const routing = RouterModule.forChild([
  { path: 'auth', component: AuthComponent },
  { path: 'main', component: AdminComponent, canActivate: [AuthGuard],
   children: [
      { path: 'Tournaments/:mode/:id', component: TournamentEditorComponent, data: {title: 'Edit Tournament'}, canActivate: [AuthGuard]},
      { path: 'Tournaments/:mode', component: TournamentEditorComponent, data: {title: 'Add Tournament'}, canActivate: [AuthGuard]},
      { path: 'Tournaments', component: TournamentTableComponent, data: {title: 'Tournament Table'}, canActivate: [AuthGuard]},
      { path: '**', redirectTo: 'Tournaments' }]
  },
  { path: '**', redirectTo: 'auth' },
]);

@NgModule({
  imports: [CommonModule, FormsModule, routing],
  providers: [AuthGuard],
  declarations: [AuthComponent, AdminComponent, TournamentEditorComponent, TournamentTableComponent]
})
export class AdminModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TournamentModule } from './tournament/tournament.module';
import { TournamentsComponent } from './pages/tournaments/tournaments.component';
import { JwtModule, JwtHelperService, JwtInterceptor } from '@auth0/angular-jwt';
import { PartialsModule } from './partials/partials.module';
export function jwtTokenGetter(): string
{
  return localStorage.getItem('id_token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TournamentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PartialsModule,
    TournamentModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

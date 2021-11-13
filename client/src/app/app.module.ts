import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BasePageComponent } from './partials/base-page/base-page.component';
import { TournamentModule } from './tournament/tournament.module';
import { TournamentsComponent } from './pages/tournaments/tournaments.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BasePageComponent,
    TournamentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TournamentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { Tournament } from 'src/app/models/tournament.model';
import { TournamentRepository } from 'src/app/models/tournament.repository';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent {

  constructor(private repository: TournamentRepository) { }

  get tournaments(): Tournament[] {
    return this.repository.getTournaments();
  }

}
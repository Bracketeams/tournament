import { Injectable } from '@angular/core';
import { Tournament } from './tournament.model';
import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class TournamentRepository
{
  private tournaments: Tournament[] = [];

  constructor(private dataSource: RestDataSource)
  {
    dataSource.getTournaments().subscribe(data => {
      this.tournaments = data;
    });
  }

  getTournaments(): Tournament[]
  {
    return this.tournaments;
  }

  getTournament(id: number): Tournament
  {
    return this.tournaments.find(b => b._id === id);
  }
  
  saveTournament(savedTournament: Tournament): void
  {
    if (savedTournament._id === null || savedTournament._id === 0 || savedTournament._id === undefined)
    {
      this.dataSource.addTournament(savedTournament).subscribe(b => {
        this.tournaments.push(savedTournament);
      });
    }
    else
    {
      this.dataSource.updateTournament(savedTournament).subscribe(book => {
        this.tournaments.splice(this.tournaments.findIndex(b => b._id === savedTournament._id), 1, savedTournament);
      });
    }
  }

  deleteTournament(deletedTournamentID: number): void
  {
    this.dataSource.deleteTournament(deletedTournamentID).subscribe(tournament => {
      this.tournaments.splice(this.tournaments.findIndex(b => b._id === deletedTournamentID), 1);
    });
  }
}

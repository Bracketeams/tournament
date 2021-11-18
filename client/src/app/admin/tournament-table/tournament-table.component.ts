import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tournament } from 'src/app/models/tournament.model';
import { TournamentRepository } from 'src/app/models/tournament.repository';

@Component({
  templateUrl: './tournament-table.component.html'
})
export class TournamentTableComponent implements OnInit {

  constructor(private repository: TournamentRepository,
              private router: Router) { }

  ngOnInit(): void {
  }

  getTournaments(): Tournament[]
  {
    return this.repository.getTournaments();
  }

  deleteTournament(id: number): void
  {
    if (confirm('Are you sure?') && (id !== undefined))
    {
      this.repository.deleteTournament(id);
    }
    else
    {
      window.location.reload(); // refresh fix
      this.router.navigateByUrl('/admin/main/Tournaments');
    }
  }

  addTournament(): void
  {
    this.router.navigateByUrl('/admin/main/Tournaments/add');
  }

  editTournament(id: number): void
  {
    this.router.navigateByUrl('/admin/main/Tournaments/edit/' + id);
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tournament } from 'src/app/models/tournament.model';
import { TournamentRepository } from 'src/app/models/tournament.repository';

@Component({
  templateUrl: './tournament-editor.component.html'
})
export class TournamentEditorComponent implements OnInit {
  editing = false;
  tournament: Tournament = new Tournament();

  constructor(private repository: TournamentRepository,
              private router: Router,
              activeRoute: ActivatedRoute)
  {
    this.editing = activeRoute.snapshot.params.mode === 'edit';

    if (this.editing)
    {
      Object.assign(this.tournament, repository.getTournament(activeRoute.snapshot.params.id));
    }
  }

  ngOnInit(): void {
  }

  save(form: NgForm): void
  {
    this.repository.saveTournament(this.tournament);
    this.router.navigateByUrl('/admin/main/tournaments');
  }

}

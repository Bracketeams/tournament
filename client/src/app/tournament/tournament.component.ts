import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { Tournament } from 'src/app/models/tournament.model';
import { TournamentRepository } from 'src/app/models/tournament.repository';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  tournaments: Tournament[];
   
  constructor(private repository: TournamentRepository) { }
  ngOnInit(): void {
    this.tournaments = this.repository.getTournaments();
    this.dtOptions = {
      pageLength: 5,
      processing: true
    };
  }
  gettournaments(): Tournament[] {
    this.tournaments = this.repository.getTournaments();
    return this.tournaments
  }
}
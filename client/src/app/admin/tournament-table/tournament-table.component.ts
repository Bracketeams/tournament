import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Tournament } from 'src/app/models/tournament.model';
import { TournamentRepository } from 'src/app/models/tournament.repository';

@Component({
  templateUrl: './tournament-table.component.html'
})
export class TournamentTableComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  tournaments: Tournament[]
  constructor(private repository: TournamentRepository,
    private router: Router) { }
  ngOnInit(): void {
    this.dtOptions = {
      pageLength: 5,
      processing: true,
      destroy: true,
      lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]]
    };
  }

  getTournaments(): Tournament[] {
    this.tournaments = this.repository.getTournaments();
    setTimeout(function () {
      $(function () {
        $('#dtBasicExample').DataTable({"pageLength": 5,
        "processing": true,
        "destroy": true,
        "lengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]]});
      });
    }, 3000);
    return this.tournaments;
  }

  deleteTournament(id: number): void {
    if (confirm('Are you sure?') && (id !== undefined)) {
      this.repository.deleteTournament(id);
    }
    else {
      window.location.reload(); // refresh fix
      this.router.navigateByUrl('/admin/main/Tournaments');
    }
  }

  addTournament(): void {
    this.router.navigateByUrl('/admin/main/Tournaments/add');
  }

  editTournament(id: number): void {
    this.router.navigateByUrl('/admin/main/Tournaments/edit/' + id);
  }

  
}

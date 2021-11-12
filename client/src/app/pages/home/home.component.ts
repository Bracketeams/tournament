import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';
import { TournamentService } from 'src/app/services/tournament.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BasePageComponent implements OnInit {

  constructor(route: ActivatedRoute) { 
    super(route);
  }

  constructor(private tournamentService:TournamentService) { }

  ngOnInit(): void {
    this.tounaments = this.tournamentService.onGet();
  }

  onDelete(id: Number) {
    this.tournamentService.onDelete(id);
  }

}

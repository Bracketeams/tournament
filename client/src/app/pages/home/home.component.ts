import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
=======
import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';
import { TournamentService } from 'src/app/services/tournament.service';
>>>>>>> Stashed changes

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  constructor(private tournamentService:TournamentService) { }

  ngOnInit(): void {
    this.tounaments = this.tournamentService.onGet();
  }

}

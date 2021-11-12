import { Component, OnInit } from '@angular/core';
import { Tournament } from 'src/app/models/tournament.model';
import { TournamentService } from 'src/app/services/tournament.service';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    id: number;
    header: string;

    constructor(private router: Router, private route: ActivatedRoute, private tournamentService: TournamentService) { }

    ngOnInit(): void() {
        this.id =+ this.route.snapshot.paramMap.get('id');
        this.header = this.id === 0? 'Add Tournament': 'Edit Tournament';
    }

    onsubmit(form: NgForm) {
        let tournament: Tournament = {
            id: form.value.id,
            title: form.value.title,
            entry: form.value.entry
        }

        this.tournamentService.onAdd(tournament);
        this.router.navigateByUrl('');
    }
}
import { Injectable } from '@angular/core';
import { Tournament } from './tournament.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class TournamentRepository {
    private tournaments: Tournament[] = [];

    constructor(private dataSource: StaticDataSource) {
        dataSource.getTournaments().subscribe(data => {
            this.tournaments = data;
        });
    }

    getTournaments(): Tournament[] {
        return this.tournaments;
    }
}


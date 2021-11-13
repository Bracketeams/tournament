import { Injectable } from "@angular/core";
import { Tournament } from "./tournament.model";
import { Observable, from } from "rxjs";

@Injectable()
export class StaticDataSource {
    private tournaments: Tournament[] = [
        new Tournament(1, 'cooltournament1', ['mark', 'jenny', 'rony', 'john']),
        new Tournament(2, 'cooltournament2', ['mark', 'jenny', 'rony', 'john']),
        new Tournament(3, 'cooltournament3', ['mark', 'jenny', 'rony', 'john']),
        new Tournament(4, 'cooltournament4', ['mark', 'jenny', 'rony', 'john'])
    ];

    // This method returns the dummy data.
    getTournaments(): Observable<Tournament[]> {
        return from([this.tournaments]);
    }
}
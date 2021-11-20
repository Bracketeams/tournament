import { Injectable } from "@angular/core";
import { Tournament } from "./tournament.model";
import { Observable, from } from "rxjs";

@Injectable()
export class StaticDataSource {
    private tournaments: Tournament[] = [
    ];

    // This method returns the dummy data.
    getTournaments(): Observable<Tournament[]> {
        return from([this.tournaments]);
    }
}
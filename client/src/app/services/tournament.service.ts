import { Injectable } from '@angular/core';
import { Tournament } from '../models/tournament.model';

@Injectable({
    providedIn: 'root'
})
export class TournamentService {
    tournaments: Tournament[] = [
        {
            id: 1,
            title: "Morning Game",
            entry: ["Mike", "Zoe", "Judy", "James"]
        },
        {
            id: 2,
            title: "Brunch Game",
            entry: ["Max", "Zo", "Jully", "Joy"]
        }
    ];

    constructor() { }

    onGet() {
        return this.tournaments;
    }

    onAdd(tournament: Tournament) {
        this.tournaments.push(Tournament);
    }
}
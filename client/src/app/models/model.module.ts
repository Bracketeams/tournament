import { NgModule } from "@angular/core";
import { TournamentRepository } from "./tournament.repository";
import { StaticDataSource } from "./static.datasource";

@NgModule({
    providers: [TournamentRepository, StaticDataSource]
})
export class ModelModule { };
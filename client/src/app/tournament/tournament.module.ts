import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "src/app/models/model.module";
import { TournamentComponent } from "./tournament.component";
import { DataTablesModule } from "angular-datatables";

@NgModule({
    imports: [ModelModule, DataTablesModule, BrowserModule, FormsModule],
    declarations: [TournamentComponent],
    exports: [TournamentComponent]
})
export class TournamentModule { }
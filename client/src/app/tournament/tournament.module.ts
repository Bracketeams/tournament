import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "src/app/models/model.module";
import { TournamentComponent } from "./tournament.component";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule],
    declarations: [TournamentComponent],
    exports: [TournamentComponent]
})
export class TournamentModule { }
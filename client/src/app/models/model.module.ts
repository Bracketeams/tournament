import { NgModule } from "@angular/core";
import { TournamentRepository } from "./tournament.repository";
import { StaticDataSource } from "./static.datasource";
import { HttpClientModule } from '@angular/common/http';
import { RestDataSource } from './rest.datasource';
import { AuthService } from './auth.service';
@NgModule({
    imports: [HttpClientModule],
    providers: [TournamentRepository, StaticDataSource,{provide: StaticDataSource, useClass: RestDataSource},
        RestDataSource, AuthService]
})
export class ModelModule { };
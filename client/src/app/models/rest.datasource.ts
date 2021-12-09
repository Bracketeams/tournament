import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tournament } from './tournament.model';
import { User } from './user.model';
import { JwtHelperService } from '@auth0/angular-jwt';

const PROTOCOL = 'http';
const PORT = 3501;

@Injectable()
export class RestDataSource {
  user: User;
  baseUrl: string;
  authToken: string;

  private httpOptions =
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      })
    };

  constructor(private http: HttpClient,
    private jwtService: JwtHelperService) {
    this.user = new User();
    //this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/api/`;
    this.baseUrl = `https://centennial-tournament.herokuapp.com/api/`;
  }

  getTournaments(): Observable<Tournament[]> {
    return this.http.get<Tournament[]>(this.baseUrl + 'tournaments');
  }

  authenticate(user: User): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'login', user, this.httpOptions);
  }

  register(user: User): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'register', user, this.httpOptions);
  }

  storeUserData(token: any, user: User): void {
    if(token.includes('Bearer '))
    {
      localStorage.setItem('id_token', token);
    }
    else {
      localStorage.setItem('id_token', 'Bearer ' + token);
    }
    
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout(): Observable<any> {
    this.authToken = null;
    this.user = null;
    localStorage.clear();

    return this.http.get<any>(this.baseUrl + 'logout', this.httpOptions);
  }

  loggedIn(): boolean {
    this.loadToken();
    if (this.authToken)
      return !this.jwtService.isTokenExpired(this.authToken);
    else
      return false;
  }

  addTournament(tournament: Tournament): Observable<Tournament> {
    this.loadToken();
    return this.http.post<Tournament>(this.baseUrl + 'tournaments/add', tournament, this.httpOptions);
  }

  updateTournament(tournament: Tournament): Observable<Tournament> {
    this.loadToken();
    return this.http.post<Tournament>(`${this.baseUrl}tournaments/edit/${tournament._id}`, tournament, this.httpOptions);
  }

  deleteTournament(id: number): Observable<Tournament> {
    this.loadToken();
    return this.http.get<Tournament>(`${this.baseUrl}tournaments/delete/${id}`, this.httpOptions);
  }

  private loadToken(): void {
    if (localStorage.length > 0) {
      const token = localStorage.getItem('id_token');
      this.authToken = token;
      this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);

    }
  }
}


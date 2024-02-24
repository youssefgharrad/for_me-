import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Universite } from '../model/Universite';
import { Foyer } from '../model/Foyer';

const BASE_URL = 'http://localhost:8081/';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  constructor(private http: HttpClient) {}

  register(signRequest: any): Observable<any> {
    return this.http.post(BASE_URL + 'signup', signRequest).pipe(
      catchError((error) => throwError(error))
    );
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post(BASE_URL + 'login', loginRequest).pipe(
      catchError((error) => throwError(error))
    );
  }

  getUserProfile(): Observable<any> {
    return this.http.get(BASE_URL + 'auth/getUserProfile', {
      headers: this.createAuthorizationHeader()
    }).pipe(
      catchError((error) => throwError(error))
    );
  }

  getAllUniversity(): Observable<Universite[]> {
    return this.http.get<Universite[]>(BASE_URL + 'auth/getAllUniversites', {
      headers: this.createAuthorizationHeader()
    }).pipe(
      catchError((error) => throwError(error))
    );
  }

  getFoyer(): Observable<Foyer[]> {
    return this.http.get<Foyer[]>(BASE_URL + 'auth/retrieveAllFoyer', {
      headers: this.createAuthorizationHeader()
    }).pipe(
      catchError((error) => throwError(error))
    );
  }

  private createAuthorizationHeader(): HttpHeaders | null {
    const jwtToken = localStorage.getItem('jwt');

    if (jwtToken) {
      console.log('JWT token found in local storage', jwtToken);
      return new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwtToken}`
      });
    } else {
      console.log('JWT token not found in local storage');
      return null;
    }
  }
}

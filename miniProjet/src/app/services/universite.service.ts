import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";
import {Universite} from "../model/Universite";
import {Foyer} from "../model/Foyer";
import {Bloc} from "../model/Bloc";

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {

  private apiServer:String='http://localhost:8081/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private _http:HttpClient) { }


  getAllUniversity(): Observable<Universite[]> {
    return this._http.get<Universite[]>(this.apiServer + 'auth/getAllUniversites', {
      headers: this.createAuthorizationHeader()
    });
  }

  getFoyer(): Observable<Foyer[]> {
    return this._http.get<Foyer[]>(this.apiServer + 'auth/retrieveAllFoyer', {
      headers: this.createAuthorizationHeader()
    });
  }


  private createAuthorizationHeader() {
    const jwtToken = localStorage.getItem('jwt');
    if (jwtToken) {
      console.log("JWT token found in local storage", jwtToken);
      return new HttpHeaders().set(
        "Authorization", "Bearer " + jwtToken
      )
    } else {
      console.log("JWT token not found in local storage");
    }
    return null;
  }
deleteUniverister( idUniversite:number){
  return this._http.delete<Universite[]>(this.apiServer+"auth/deleteUniversite/"+idUniversite,this.httpOptions)
}



  getUniversiteById( idUniversite:number){
    return this._http.get<Universite[]>(this.apiServer+"auth/getUniversite/"+idUniversite,this.httpOptions)
  }

  getUniversiteByName(nomUniversite: string) {
    return this._http.get<Universite>(this.apiServer+"auth/byName/"+nomUniversite, this.httpOptions);
  }
  getUniversiteWithFoyer(): Observable<Universite[]> {
        // Assume you have a method to retrieve available universities
        return this._http.get<Universite[]>(this.apiServer + "auth/getAvailableUniversities", this.httpOptions);
    }

  isUniversiteInUse(universiteId: number): Observable<boolean> {
    return this._http.get<boolean>(`${this.apiServer}auth/isUniversiteInUse/${universiteId}`, this.httpOptions);
  }

  //getUniversityWithOutFoyer():Observable<Universite[]>{
    //return this._http.get<Universite[]>(this.apiServer + "universite/getAllUniversites", this.httpOptions).pipe(
      //map((universites: Universite[]) => universites.filter(u => u.foyer?.idFoyer !== null))
    //);
   //}

  getAllUniversityWithoutFoyer():Observable<Universite[]>{
    return this._http.get<Universite[]> (this.apiServer+"auth/getAllUniversiteWithoutFoyer",this.httpOptions)
  }

  addUniversite(universite:Universite){
    return this._http.post<Universite[]> (this.apiServer+"auth/addUniversite",universite,this.httpOptions)

  }

  editUniversite(universite:Universite){
    return this._http.put<Universite[]> (this.apiServer+"auth/updateUniversite",universite,this.httpOptions)

  }



  searchUniversities(query: string): Observable<Universite[]> {
    const url = `http://localhost:8081/auth/search?query=${query}`;
    return this._http.get<Universite[]>(url);
  }



}

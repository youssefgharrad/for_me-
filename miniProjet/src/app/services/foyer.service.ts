import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Foyer} from "../model/Foyer";
import {Bloc} from "../model/Bloc";

@Injectable({
  providedIn: 'root'
})
export class FoyerService {


  private apiServer:String='http://localhost:8081/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private _http:HttpClient) { }




  getFoyer():Observable<Foyer[]>{
    return this._http.get<Foyer[]> (this.apiServer+"foyer/retrieveAllFoyer",this.httpOptions)
  }

  deleteFoyer( foyerId:number){
    return this._http.delete<Foyer[]>(this.apiServer+"foyer/deleteFoyer/"+foyerId,this.httpOptions)
  }



  ajouterFoyer(foyer: Foyer) {
    return this._http.post<Foyer>(this.apiServer+"foyer/addFoyer",foyer, this.httpOptions);
  }

  modifierFoyer(foyer: Foyer) {
    return this._http.put<Foyer>(this.apiServer+"foyer/updateFoyer",foyer, this.httpOptions);
  }

  //getBlocsForFoyer(foyerId: number) {
    //return this._http.get<Bloc>(this.apiServer+"bloc/getBlocsForFoyer"+foyerId,this.httpOptions);
  //}

  getBlocsForFoyer(foyerId: number): Observable<string[]> {
    return this._http.get<string[]>(`${this.apiServer}bloc/getBlocsForFoyer/${foyerId}`, this.httpOptions);
  }


  searchFoyers(nomFoyer: string, capaciteFoyer: number, nomUniversite: string): Observable<Foyer[]> {
    const params = {
      nomFoyer: nomFoyer || '',
      capaciteFoyer: capaciteFoyer ? capaciteFoyer.toString() : '',
      nomUniversite: nomUniversite || ''
    };

    return this._http.get<Foyer[]>(`${this.apiServer}foyer/search`, { params: params });
  }





}

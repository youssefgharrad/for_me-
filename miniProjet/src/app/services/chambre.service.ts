import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Chambre } from '../model/Chambre';
import { Observable } from 'rxjs';
import {Foyer} from "../model/Foyer";
@Injectable({
  providedIn: 'root'
})
export class ChambreService {
  private apiServer:String='http://localhost:8081/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private _http:HttpClient) { }



  getAllChambres():Observable<Chambre[]>{
    return this._http.get<Chambre[]> (this.apiServer+"chambre/getAllChambres",this.httpOptions)
  }
  getChambreById(idChambre: number):Observable<Chambre>{
  return this._http.get<Chambre>(`${this.apiServer}chambre/getChambre/${idChambre}`, this.httpOptions);}


  deleteChambre(idChambre: number){
    return this._http.delete(`${this.apiServer}chambre/deleteChambre/${idChambre}`,this.httpOptions);
  }


  addChambre(chambre:Chambre, idBloc: number):Observable<Chambre>{
    return this._http.post<Chambre>(`${this.apiServer}chambre/addChambre?idBloc=${idBloc}`, chambre,this.httpOptions);
  }
  updateChambre(chambre: Chambre, idChambre:number, idBloc:number): Observable<Chambre> {
    return this._http.put<Chambre>(
      `${this.apiServer}chambre/updateChambre/${idChambre}/${idBloc}`,
      chambre,
      this.httpOptions
    );
  }

  getChambreByIdBlocAndTypeC(idBloc: number, typeChambre: string): Observable<Chambre[]> {
    const url = `${this.apiServer}/getChambreByIdBlocAndTypeC/${idBloc}/${typeChambre}}`;
    return this._http.get<Chambre[]>(url);
  }
}

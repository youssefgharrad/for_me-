import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Bloc} from "../model/Bloc";
import {Foyer} from "../model/Foyer";

@Injectable({
  providedIn: 'root'
})
export class BlocService {

  private apiServer:String='http://localhost:8081/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private _http:HttpClient) { }


  getAllBlocs():Observable<Bloc[]>{
    return this._http.get<Bloc[]> (this.apiServer+"bloc/getAllBlocs",this.httpOptions)
  }

  deleteBloc( idBloc:number){
    return this._http.delete<Foyer[]>(this.apiServer+"bloc/deleteBloc/"+idBloc,this.httpOptions)
  }


  ajouterBloc(bloc: Bloc) {
    return this._http.post<Bloc>(this.apiServer+"bloc/addBloc",bloc, this.httpOptions);
  }

  modifierBloc(bloc: Bloc) {
    return this._http.put<Bloc>(this.apiServer+"bloc/updateBloc",bloc, this.httpOptions);
  }

  getBlocIds(): Observable<number[]> {
    return this.getAllBlocs().pipe(
      map(blocs => blocs.map(bloc => bloc.idBloc))
    );
  }




}

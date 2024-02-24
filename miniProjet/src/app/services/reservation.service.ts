import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reservation} from "../model/Reservation";
import {Chambre, TypeChambre} from "../model/Chambre";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {


  private apiServer: string = 'http://localhost:8081/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private _http: HttpClient) { }

  // Adjust methods according to your Reservation service endpoints
  getReservations(): Observable<Reservation[]> {
    return this._http.get<Reservation[]>(this.apiServer + "reservation/getAllReservationsWithChambre", this.httpOptions);
  }

  getAllReservations(): Observable<Reservation[]> {
    return this._http.get<Reservation[]>(this.apiServer + "reservation/getAllReservations", this.httpOptions);
  }

  deleteReservation(idReservation: number): Observable<any> {
    return this._http.delete<any>(`${this.apiServer}reservation/deleteReservation/${idReservation}`, this.httpOptions);
  }

  getReservationById(idReservation: number): Observable<Reservation> {
    return this._http.get<Reservation>(`${this.apiServer}reservation/GetChambreByReservationId/${idReservation}`, this.httpOptions);
  }

  getReservationByDate(date: Date): Observable<Reservation[]> {
    // Adjust the API endpoint and parameter according to your backend implementation
    // Assuming your API endpoint accepts a date parameter for fetching reservations by date
    return this._http.get<Reservation[]>(`${this.apiServer}reservation/getRservationByAnneeUniversitaire/${date.toISOString()}`, this.httpOptions);
  }

  // Add more methods as per your service requirements

//--------------------->>>>  add reservation le9dima
  addReservation(res: Reservation): Observable<any>{
    // return this._http.post<Reservation[]>(`${this.apiServer}reservation/addResrvation`, res)
    return this._http.post(this.apiServer+"reservation/addReservation", res)
  }


  addReservation1(res: Reservation, idChambre:number): Observable<any> {
    return this._http.post<any>(`${this.apiServer}reservation/addReservation/${idChambre}`, res);
  }

  addReservation2(res: Reservation, idChambre:number, cinEtudiant:number): Observable<any> {
    return this._http.post<any>(`${this.apiServer}reservation/addReservation/${idChambre}/${cinEtudiant}`, res);
  }

  addReservation3(res: Reservation, idChambre:TypeChambre, cinEtudiant:number): Observable<any> {
    return this._http.post<any>(`${this.apiServer}reservation/addReservation22/${idChambre}/${cinEtudiant}`, res);
  }

  findRoomsByType(): Observable<Chambre[]> {
    return this._http.get<Chambre[]>(`${this.apiServer}reservation/findRoomsByType`, this.httpOptions);
  }

}

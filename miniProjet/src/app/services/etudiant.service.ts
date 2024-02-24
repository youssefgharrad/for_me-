import { Injectable } from '@angular/core';
import { Etudiant } from '../model/Etudiant';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private apiServer:String='http://localhost:8081/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getAllEtudiants(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(this.apiServer + 'etudiant/getAllEtudiants');
  }

  getEtudiantById(idEtudiant: number): Observable<Etudiant> {
    return this.http.get<Etudiant>(`${this.apiServer}etudiant/getEtudiant/${idEtudiant}`,this.httpOptions);
  }

  addEtudiant(etudiant: Etudiant): Observable<Etudiant> {
    return this.http.post<Etudiant>(`${this.apiServer}etudiant/addEtudiant`, etudiant,this.httpOptions);
  }

  updateEtudiant(etudiant: Etudiant): Observable<Etudiant> {
    return this.http.put<Etudiant>(`${this.apiServer}etudiant/updateEtudiant`, etudiant,this.httpOptions);
  }

  deleteEtudiant(idEtudiant: number): Observable<any> {
    return this.http.delete(`${this.apiServer}etudiant/deleteEtudiant/${idEtudiant}`,this.httpOptions);
  }
}



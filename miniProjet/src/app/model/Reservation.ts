import { Chambre } from "./Chambre";
import { Etudiant } from "./Etudiant";

export class Reservation {
  idReservation:number ;
  anneeUniversitaire:Date ;
  estValide:Boolean ;
  chambres :Chambre ;
  etudiant :Etudiant ;
}

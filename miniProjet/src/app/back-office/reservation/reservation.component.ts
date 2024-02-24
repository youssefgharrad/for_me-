import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Reservation} from "../../model/Reservation";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ReservationService} from "../../services/reservation.service";
import {MatDialog} from "@angular/material/dialog";
import {Chambre} from "../../model/Chambre";
import {ReservationdialogComponent} from "./reservationdialog/reservationdialog.component";
import {ComponentType} from "@angular/cdk/overlay";

@Component({

  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})

export class ReservationComponent implements OnInit{
  reservations : Reservation[]= []
  selectedDate: Date = new Date();
  resForm :FormGroup ;

  constructor(private serviceu:ReservationService , private fb :FormBuilder,private dialog: MatDialog) {}
  ngOnInit() {
    this.getReservation();
    this.resForm =this.fb.group ({
      idReservation:[''] ,
      anneeUniversitaire :[''] ,
      estValide:['']
    })
  }

  getReservation(){
    this.serviceu.getAllReservations().subscribe((src:Reservation[])=>{
      this.reservations=src;
    })
  }

  deleteReservation(idReservation){
    if(confirm("voulez vous supprimer cette Reservation !")){
      this.serviceu.deleteReservation(idReservation).subscribe(()=>{
        alert("suppression avec succes");
        window.location.reload()

      });
    }
  }

  // Fonction pour charger les réservations par date
  loadReservationsByDate(): void {
    this.serviceu.getReservationByDate(this.selectedDate).subscribe(
      (data: Reservation[]) => {
        this.reservations = data;
        // Réassignez les données reçues aux réservations
      },
      (error) => {
        console.log('Error loading reservations by date:', error);
        // Handle errors as needed
      }
    );
  }

// Méthode pour mettre à jour la date sélectionnée
  onDateChange(selectedDate: Date): void {
    this.selectedDate = selectedDate;
    // Appelez la méthode pour charger les réservations avec la nouvelle date
    this.loadReservationsByDate();
  }


  handelsubmit() {
    this.serviceu.addReservation(this.resForm.value).subscribe();
    this.ngOnInit() ;
  }

  showChamberInfo(reservationId: number) {
    this.serviceu.getReservationById(reservationId).subscribe((reservation: any) => {
      if (reservation ) {
        const chamber: Chambre = reservation;// Assuming there's only one chamber per reservation
        // Display chamber info as needed (e.g., alert, modal, etc.)
        console.log('Chamber Information:', chamber);
        localStorage.setItem('chambreData', JSON.stringify(chamber));
        const dialogRef = this.dialog.open(ReservationdialogComponent, {
          width: '700px',
          height: '330px',
          position: { top: '-40%', left: '30%' },
          data: { chamber: chamber  }
        });
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            console.log('List Bloc Dialog result:', result);
          }
        });
      } else {
        console.log('No chamber connected to this reservation.');
      }
    });
  }




}

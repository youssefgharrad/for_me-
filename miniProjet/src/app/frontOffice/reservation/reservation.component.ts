import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormsModule, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { Chambre, TypeChambre } from 'src/app/model/Chambre';
import { Reservation } from 'src/app/model/Reservation';
import { ChambreService } from 'src/app/services/chambre.service';
import { ReservationService } from 'src/app/services/reservation.service';
import {ToastrService,ToastrConfig} from "ngx-toastr";


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservation :Reservation=new Reservation() ;
  res : Reservation[]= []
  currentdate : Date =new Date ;
  qrData: string = '';
  chambres: Chambre[] = [];
  chambreId: number = 2;
  cinEtuidant :number =22;
  cinValue : string ;
  chambreType :string ;
  reservationForm: NgForm;

  roomTypes: TypeChambre[] = [];

  reservations : Reservation[]= []

  selectedType: TypeChambre ;
  chambreTypes: TypeChambre[] = [TypeChambre.SIMPLE, TypeChambre.DOUBLE, TypeChambre.TRIPLE];


  constructor(private serviceu:ReservationService , private router:Router,private servCham :ChambreService,
              private toastr: ToastrService) {}
  ngOnInit() {
    this.fetchChambres();
    this.getRoomTypes();
  }

  existingChambre: Chambre = {
    idChambre: 1,
    numeroChambre: 22,
    totale_cap: 3,
    typeC: TypeChambre.TRIPLE,
    bloc: null
  };

  getReservation(){
    this.serviceu.getReservations().subscribe((src:Reservation[])=>{
      console.log(src+"***********************************************");
      this.reservations=src;
    })
}




  /*saveReservation(){
    this.serviceu.addReservation(this.reservation).subscribe(data=>{
      console.log(data) ;
    },
    error=>console.log(error)
    );
  }*/

  onSubmit(){
    console.log(this.reservation) ;
    //this.saveReservation
    this.saveReservation2(this.chambreType, this.cinValue)
  }
  /*
    onSubmit() {
      if (this.reservationForm && this.reservationForm.valid) {
        this.saveReservation2(this.chambreType, this.cinValue);
      }
      else {
        console.log("error form")
      }
    }*/


  saveReservation2(chambreType :string,cinValue :string) {
    //const currentDate = new Date("2023-11-09T22:24:16.000+00:00"); // get the current date
    this.reservation.anneeUniversitaire = this.currentdate; // set the academic year to the current date in ISO format
    this.reservation.estValide = false; // set the valid status to true
    //this.reservation.chambres= this.existingChambre ;
    /*this.servCham.getChambres().subscribe(
      (data: Chambre[]) => {
        this.chambres= data; // Assign the fetched Chambres to the array
      }) ;*/
    console.log(this.reservation)

    /* --------------------------------->>>>>>>>> le9diim


    this.serviceu.addReservation(this.reservation).subscribe(data => {
      console.log(data);
    }, error => console.log(error));

*/

    /*
if (cinValue.trim() !== '') {
  localStorage.setItem('cinData', cinValue.toString());

}*/

const cinNumber: number = parseInt(cinValue, 10);
if (chambreType !== undefined) {
  // Saving selected chambreType to local storage
  localStorage.setItem('selectedChambreType', chambreType);
}
const chambreType2: TypeChambre | undefined = this.getTypeChambreFromString(chambreType);






    this.serviceu.addReservation3(this.reservation,chambreType2,cinNumber).subscribe(data => {
      console.log(data);
      if(chambreType2!= null || cinNumber !=null ){
      this.toastr.success('Reservation added successfully!', 'Success');
      }
    }, error => console.log(error));


  }

  fetchReservationData() {
    this.serviceu.getReservations().subscribe(
      (data: Reservation[]) => {
        if (data.length > 0) {
          // Assuming you're handling the first reservation in the array
          this.reservation = data[0];
          this.qrData = JSON.stringify(this.reservation);
        } else {
          console.log('No reservation data found');
        }
      },
      (error) => console.log(error)
    );
  }


  fetchChambres() {
    this.servCham.getAllChambres().subscribe(
      (data: Chambre[]) => {
        this.chambres= data; // Assign the fetched Chambres to the array
      },
      (error) => {
        console.log(error);
      }
    );
  }


  // Function to convert string to TypeChambre enum value
getTypeChambreFromString(value: string): TypeChambre | undefined {
  return Object.values(TypeChambre).find((type: string) => type === value) as TypeChambre | undefined;
}

  getRoomTypes() {
    this.serviceu.findRoomsByType().subscribe(
      (data: Chambre[]) => {
        this.roomTypes = data.map(chambre => chambre.typeC);

        if (this.roomTypes.length === 0) {
          // Display a message or notification when no room types are available
          const toastOptions: Partial<ToastrConfig> = {
            timeOut: 10000 // Adjust the duration in milliseconds (5000ms = 5 seconds)
          };
          this.toastr.warning('No rooms available', 'Alert', toastOptions);
        }
      },
      (error) => {
        console.error('Error fetching room types:', error);
      }
    );

  }



}

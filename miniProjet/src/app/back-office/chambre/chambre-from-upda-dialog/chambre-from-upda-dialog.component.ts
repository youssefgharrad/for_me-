import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Chambre} from "../../../model/Chambre";
import {ChambreService} from "../../../services/chambre.service";
import {BlocService} from "../../../services/bloc.service";
import {MatDialogRef} from "@angular/material/dialog";
import {Bloc} from "../../../model/Bloc";

@Component({

  selector: 'app-chambre-from-upda-dialog',
  templateUrl: './chambre-from-upda-dialog.component.html',
  styleUrls: ['./chambre-from-upda-dialog.component.css']
})
  export class ChambreFromUpdaDialogComponent implements OnInit {
  chambre: Chambre = new Chambre();
  blocId:String[] = [];
  blocIds: number[] = [];


  constructor(public dialogRef: MatDialogRef<ChambreFromUpdaDialogComponent>, private chambreservice: ChambreService,private blocService: BlocService) { }
  ngOnInit():void{
    this.chambre.bloc=new Bloc();
    this.loadBlocIds();
  }
  onSubmit() {
    // Call your service's addChambre method when the form is submitted
    this.chambreservice.updateChambre(this.chambre,this.chambre.idChambre,this.chambre.bloc.idBloc).subscribe(
      (result) => {
        console.log('Chambre added successfully:', result);
        // Reset the form or do any other necessary actions
        this.chambre = new Chambre();
        this.chambre.bloc=new Bloc();
        this.dialogRef.close();
      },
      (error) => {
        console.error('Error adding chambre:', error);
        // Handle error, e.g., display an error message to the user
      }
    );
  }
  fetchChambreDataById(id: number) {
    this.chambreservice.getChambreById(id).subscribe(
      (chambre: Chambre) => {
        // Set the fetched data to your form fields
        this.chambre = { ...chambre };
      },
      (error) => {
        console.error('Error fetching chambre data:', error);
      }
    );
  }

  loadBlocIds() {
    this.blocService.getBlocIds().subscribe(
      (names) => {
        this.blocIds = names;
      },
      (error) => {
        console.error('Error fetching bloc ids:', error);
      }
    );
  }
}


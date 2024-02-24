import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Chambre} from "../../../model/Chambre";
import {MatDialogRef} from "@angular/material/dialog";
import {ChambreService} from "../../../services/chambre.service";
import {Bloc} from "../../../model/Bloc";
import {BlocService} from "../../../services/bloc.service";

@Component({

  selector: 'app-chambre-from-dialog',
  templateUrl: './chambre-from-dialog.component.html',
  styleUrls: ['./chambre-from-dialog.component.css']


})
export class ChambreFromDialogComponent  implements OnInit {
  chambre: Chambre = new Chambre();
  blocId:String[] = [];
  blocIds: number[] = [];
  public dialogRef: MatDialogRef<ChambreFromDialogComponent>;

  //bloc: Bloc =new Bloc();
  constructor(dialogRef: MatDialogRef<ChambreFromDialogComponent>, private chambreservice: ChambreService,private blocService: BlocService) {


    this.dialogRef = dialogRef;

  }

  ngOnInit(): void {
    this.chambre.bloc=new Bloc();
    this.loadBlocIds();
    ;
  }

  onSubmit() {
    //this.chambre.totale_cap=3 ;
    // Call your service's addChambre method when the form is submitted
    this.chambreservice.addChambre(this.chambre,this.chambre.bloc.idBloc).subscribe(
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


  onNoClick(): void {
    this.dialogRef.close();
  }

}


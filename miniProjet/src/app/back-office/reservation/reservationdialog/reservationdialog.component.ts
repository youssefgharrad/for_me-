import {Component, Inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Chambre} from "../../../model/Chambre";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ChambreService} from "../../../services/chambre.service";

@Component({

  selector: 'app-reservationdialog',
  templateUrl: './reservationdialog.component.html',
  styleUrls: ['./reservationdialog.component.css']
})
export class ReservationdialogComponent implements OnInit{
  chambre: Chambre;

  constructor(private dialog: MatDialogRef<ReservationdialogComponent> ,
              @Inject(MAT_DIALOG_DATA) public data: Chambre,
              private chambreService: ChambreService ) {
    console.log('Chambre Data:', data);
  }
  ngOnInit(): void {
    const storedChambreData = localStorage.getItem('chambreData');
    this.chambre=JSON.parse(storedChambreData);
  }


  onNoClick(): void {
    this.dialog.close();
  }
}

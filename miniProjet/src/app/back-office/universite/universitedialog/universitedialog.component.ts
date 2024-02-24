import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Foyer} from "../../../model/Foyer";
import {Validators} from "@angular/forms";
import { UniversiteService } from 'src/app/services/universite.service';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {Universite} from "../../../model/Universite";

@Component({

  styleUrls: ['./universitedialog.component.css'],
  templateUrl: './universitedialog.component.html',
})


export class UniversitedialogComponent implements OnInit{

  public dialogRef: MatDialogRef<UniversitedialogComponent>;

  constructor(private _service:UniversiteService,
              dialogRef: MatDialogRef<UniversitedialogComponent>,
              private snackBar: MatSnackBar,private router: Router){
    this.dialogRef = dialogRef;
  }

  ngOnInit(): void {

  }
  universite : Universite=new Universite();
  addUniversite(){
    this._service.addUniversite(this.universite).subscribe();
    const config = new MatSnackBarConfig();
    config.duration = 2000;
    this.snackBar.open('L\'université a été ajoutée avec succès', 'Fermer', config);
    window.location.reload();

  }
  onNoClick(): void {
    this.dialogRef.close();
  }


}

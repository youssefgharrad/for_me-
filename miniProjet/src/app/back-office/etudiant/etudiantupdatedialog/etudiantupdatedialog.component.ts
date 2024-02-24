import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Etudiant } from 'src/app/model/Etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { MatDialog } from '@angular/material/dialog';
import { EtudiantdialogComponent } from '../etudiantdialog/etudiantdialog.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-etudiantupdatedialog',
  templateUrl: './etudiantupdatedialog.component.html',
  styleUrls: ['./etudiantupdatedialog.component.css']
})
export class EtudiantupdatedialogComponent  implements OnInit {

  etudiant: Etudiant = new Etudiant();

  public dialogRef :MatDialogRef<EtudiantupdatedialogComponent>

  constructor(dialogRef: MatDialogRef<EtudiantupdatedialogComponent>, private etudiantService: EtudiantService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // Call your service's addEtudiant method when the form is submitted
    this.etudiantService.updateEtudiant(this.etudiant).subscribe(
      (result) => {
        console.log('Etudiant updated successfully:', result);
        // Reset the form or do any other necessary actions
        this.etudiant = new Etudiant();
        this.dialogRef.close();
      },
      (error) => {
        console.error('Error updating etudiant:', error);
        // Handle error, e.g., display an error message to the user
      }
    );
  }

  fetchEtudiantDataById(id: number) {
    this.etudiantService.getEtudiantById(id).subscribe(
      (etudiant: Etudiant) => {
        // Set the fetched data to your form fields
        this.etudiant = { ...etudiant };
      },
      (error) => {
        console.error('Error fetching etudiant data:', error);
      }
    );
  }
}




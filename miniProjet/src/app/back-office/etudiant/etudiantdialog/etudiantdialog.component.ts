import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Etudiant } from 'src/app/model/Etudiant';
import { EtudiantService } from './../../../services/etudiant.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-etudiantdialog',
  templateUrl: './etudiantdialog.component.html',
  styleUrls: ['./etudiantdialog.component.css']
})
export class EtudiantdialogComponent {
  etudiant: Etudiant;

  constructor(private EtudiantService: EtudiantService ,private dialogRef: MatDialogRef<EtudiantdialogComponent>) { }

  ngOnInit(): void {
    this.etudiant = new Etudiant();
  }


  onSubmit(): void {
    this.EtudiantService.addEtudiant(this.etudiant)
      .subscribe(() => {
        this.goBack();
      });
  }

  goBack(): void {
    this.dialogRef.close();
  }
}

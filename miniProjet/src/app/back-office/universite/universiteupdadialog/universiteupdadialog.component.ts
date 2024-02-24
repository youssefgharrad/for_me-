import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UniversiteService } from 'src/app/services/universite.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  styleUrls: ['./universiteupdadialog.component.css'],
  templateUrl: './universiteupdadialog.component.html',
})
export class UniversiteupdadialogComponent implements OnInit {
  editedUniversite: any = {};
  idUniversite: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private universiteService: UniversiteService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<UniversiteupdadialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { idUniversite: number }
  ) {}

  ngOnInit(): void {
    if (this.data && this.data.idUniversite) {
      this.idUniversite = this.data.idUniversite;
      this.universiteService.getUniversiteById(this.idUniversite).subscribe(
        (universite) => {
          this.editedUniversite = universite;
        },
        (error) => {
          console.error('Error fetching university data:', error);
        }
      );
    }
  }

  saveChanges() {
    this.universiteService.editUniversite(this.editedUniversite).subscribe(
      () => {
        const config = new MatSnackBarConfig();
        config.duration = 2000;

        this.snackBar.open('L\'université a été modifiée avec succès', 'Fermer', config);
        window.location.reload();

      },
      (error) => {
        console.error('Error updating university data:', error);
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

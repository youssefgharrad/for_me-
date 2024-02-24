import { Component, Inject, OnInit } from '@angular/core';
import { Foyer } from '../../../model/Foyer';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FoyerService } from '../../../services/foyer.service';

@Component({
  selector: 'app-listblocdialog',
  templateUrl: './listblocdialog.component.html',
  styleUrls: ['./listblocdialog.component.css']
})
export class ListblocdialogComponent implements OnInit {
  foyer: Foyer;
  blocs: string[] = [];

  constructor(
    private dialogRef: MatDialogRef<ListblocdialogComponent>,
    private foyerService: FoyerService,
    @Inject(MAT_DIALOG_DATA) public data: { foyer?: Foyer, blocks?: string[] }
  ) {
    this.foyer = data.foyer ?? { idFoyer: 0, nomFoyer: '', capaciteFoyer: 0, universite: null, bloc: null };
  }

  ngOnInit(): void {
    this.getAllBlocsForFoyer();
  }

  getAllBlocsForFoyer() {
    if (this.foyer.idFoyer) {
      this.foyerService.getBlocsForFoyer(this.foyer.idFoyer).subscribe((blocs: string[]) => {
        console.log(blocs);
        this.blocs = blocs;
      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

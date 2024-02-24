import {Component, Inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {Universite} from "../../../model/Universite";
import {MatListModule} from "@angular/material/list";

@Component({
  selector: 'app-university-selection-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatListModule],
  templateUrl: './university-selection-dialog.component.html',
})
export class UniversitySelectionDialogComponent {

  constructor(
      public dialogRef: MatDialogRef<UniversitySelectionDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: { universities: Universite[] }
  ) {}

  onSelect(university: Universite): void {
    this.dialogRef.close(university);
  }

}

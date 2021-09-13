import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AccountComponent} from "../../account.component";


@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AccountComponent>,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }


}


import { Component } from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-modal-confirm',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButton
  ],
  templateUrl: './modal-confirm.component.html',
  styleUrl: './modal-confirm.component.css'
})
export class ModalConfirmComponent {


  constructor(private dialogRef:MatDialogRef<any>) {
  }

  onNoClick(){
    this.dialogRef.close()
  }
}

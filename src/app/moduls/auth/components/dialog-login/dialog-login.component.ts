import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.css']
})
export class DialogLoginComponent {

  constructor(private dialogRef:MatDialogRef<DialogLoginComponent>) {
  }

  salir() {
    this.dialogRef.close();
  }
}

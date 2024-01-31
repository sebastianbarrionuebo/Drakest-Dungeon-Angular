import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-register',
  templateUrl: './dialog-register.component.html',
  styleUrls: ['./dialog-register.component.css']
})
export class DialogRegisterComponent {


  constructor(private dialogRef:MatDialogRef<DialogRegisterComponent>) {
  }

  salir() {
    this.dialogRef.close();
  }
}

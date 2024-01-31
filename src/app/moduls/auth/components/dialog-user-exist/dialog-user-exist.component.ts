import { Component } from '@angular/core';
import { DialogRegisterComponent } from '../dialog-register/dialog-register.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-user-exist',
  templateUrl: './dialog-user-exist.component.html',
  styleUrls: ['./dialog-user-exist.component.css']
})
export class DialogUserExistComponent {

  constructor(private dialogRef:MatDialogRef<DialogRegisterComponent>) {
  }

  salir() {
    this.dialogRef.close();
  }
}

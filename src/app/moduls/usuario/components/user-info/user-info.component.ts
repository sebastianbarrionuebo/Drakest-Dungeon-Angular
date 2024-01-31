import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { EditCampoComponent } from '../edit-campo/edit-campo.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent{

  constructor(public authService:AuthService, private router:Router, private matDialog:MatDialog) {
  }

  openEdit() {
    const dialogRef = this.matDialog.open(EditCampoComponent,{})
    dialogRef.afterClosed().subscribe({
      next: (result) => {
        console.log('El cuadro de diálogo se ha cerro:', result);
      }
    })
  }

  volverMenu(){
    this.router.navigate(['/main']);
  }
}

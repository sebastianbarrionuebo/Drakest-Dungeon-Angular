import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Entidad } from 'src/app/core/models';
import { EquipoService } from 'src/app/core/services/equipo.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-equipo',
  templateUrl: './edit-equipo.component.html',
  styleUrls: ['./edit-equipo.component.css']
})
export class EditEquipoComponent {
  public hero:Entidad = new Entidad();


  constructor(@Inject(MAT_DIALOG_DATA) private data: Entidad,
    private teamService:EquipoService,
    private dialogRef:MatDialogRef<EditEquipoComponent>) {
    this.hero = this.data;
  }



  public asignar(pos:Number) {
    this.teamService.asignar(pos,this.hero);
    this.dialogRef.close(true);
  }


  public closeDialog() {
    this.dialogRef.close(true);
  }
}

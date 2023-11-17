import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/core/models';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-edit-campo',
  templateUrl: './edit-campo.component.html',
  styleUrls: ['./edit-campo.component.css']
})
export class EditCampoComponent implements OnInit{
  public editForm:FormGroup;
  //private campo:String = '';

  constructor(@Inject(MAT_DIALOG_DATA) private data:String,
    private dialogRef:MatDialogRef<EditCampoComponent>,
    public authService:AuthService,
    private fb:FormBuilder) 
    {
    //this.campo = this.data;
    this.editForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  public editUser() {
    this.authService.editUser(this.editForm.get('name')?.value,this.editForm.get('email')?.value,this.editForm.get('password')?.value).subscribe({
      next: (resolve) => {
        console.log("Se modifico con exito!");
        this.dialogRef.close(true);
      },
      error: (error) => {console.log(error)}
    })
  }
  
  
  get name(){
    return this.editForm.get("name") as FormControl;
  }

  get email(){
    return this.editForm.get("email") as FormControl;
  }
  
  get password(){
    return this.editForm.get("password") as FormControl;
  }
  
  public closeDialog() {
    this.dialogRef.close(true);
  }


  
  ngOnInit(): void {
    this.editForm.setValue(this.authService.user);
  }
}

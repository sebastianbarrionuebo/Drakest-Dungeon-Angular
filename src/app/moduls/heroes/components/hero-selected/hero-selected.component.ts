import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EquipoService } from 'src/app/core/services/equipo.service';

@Component({
  selector: 'app-hero-selected',
  templateUrl: './hero-selected.component.html',
  styleUrls: ['./hero-selected.component.css']
})
export class HeroSelectedComponent {


  constructor(public equipService:EquipoService, private router:Router) {
  }

  public guardarEquipo() {
    this.equipService.addEquipo().subscribe({
      next: (result) => {
        console.log(result)
        this.equipService.resetEquipo();
      },
      error: (error) => {console.log(error)}
    });
  }

  public salir() {
    this.router.navigate(['/main'])
  }


  quitarHeroe(pos:Number){
    this.equipService.quitarHeroe(pos);
  }

}

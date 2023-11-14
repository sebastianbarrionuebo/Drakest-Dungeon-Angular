import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { EquipoService } from 'src/app/core/services/equipo.service';

@Component({
  selector: 'app-nav-bar-user',
  templateUrl: './nav-bar-user.component.html',
  styleUrls: ['./nav-bar-user.component.css'],
  standalone: true,
  imports: [
    RouterModule
  ]
})
export class NavBarUserComponent {

  constructor (private authService:AuthService, private equipoService:EquipoService) {
    
  }


  logout() {
    this.authService.logout();
    this.equipoService.logOut();
  }

}

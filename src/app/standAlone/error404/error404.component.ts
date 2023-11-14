import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css'],
  standalone: true,
})
export class Error404Component {

  constructor(private router:Router){}

  
  irALanding() {
    this.router.navigate(['/landing']);
  }
}

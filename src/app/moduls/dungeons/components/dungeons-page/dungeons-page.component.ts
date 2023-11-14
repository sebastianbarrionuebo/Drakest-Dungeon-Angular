import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DungeonService } from 'src/app/core/services/dungeon.service';

@Component({
  selector: 'app-dungeons-page',
  templateUrl: './dungeons-page.component.html',
  styleUrls: ['./dungeons-page.component.css']
})
export class DungeonsPageComponent {


  constructor(public dungeonService:DungeonService, private router:Router) {
    this.dungeonService.getDungeons();
  }


  volverAMain() {
    this.router.navigate(['/main'])
  }

}

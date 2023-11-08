import { Component } from '@angular/core';
import { DungeonService } from 'src/app/core/services/dungeon.service';
import { EntidadService } from 'src/app/core/services/entidad.service';

@Component({
  selector: 'app-dungeons-page',
  templateUrl: './dungeons-page.component.html',
  styleUrls: ['./dungeons-page.component.css']
})
export class DungeonsPageComponent {


  constructor(public dungeonService:DungeonService) {
    this.dungeonService.getDungeons();
  }






}

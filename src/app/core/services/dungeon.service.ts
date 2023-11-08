import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dungeon } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DungeonService {
  private baseUrl:String = 'http://localhost:3000';
  public listDungeons:Array<Dungeon> = [];
  public primerCargaCitas:Boolean = true;

  
  constructor(private http:HttpClient) { }


  public getDungeons() {
    if(this.primerCargaCitas){
      this.http.get<Dungeon[]>(`${this.baseUrl}/dungeons`).subscribe({
        next: (resolve) => {
          resolve.forEach(item => {
            this.listDungeons.push(new Dungeon(item))
          })
        },
        error: (error) => {console.log(error)}
      });
    }
    this.primerCargaCitas = false;
  }


  

}

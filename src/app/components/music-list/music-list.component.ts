import {Component, OnInit} from '@angular/core';
import {MusicService} from "../../services/music.service";
import {Music} from "../../models/music";
import {NgForOf, NgIf} from "@angular/common";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-music-list',
  standalone: true,
  imports: [
    NgIf,
    MatProgressSpinnerModule,
    MatCardModule, MatButtonModule, NgForOf, RouterLink
  ],
  templateUrl: './music-list.component.html',
  styleUrl: './music-list.component.css'
})
export class MusicListComponent implements OnInit{


  musics?:Music[]
  isLoading = false
  constructor(private musicService:MusicService) {
  }

  ngOnInit() {
    this.isLoading = true
    this.musicService.getAll().subscribe(data=>{
      this.musics = data;
      this.isLoading = false
    })
  }

}

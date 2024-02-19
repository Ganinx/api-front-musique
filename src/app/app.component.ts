import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MusicListComponent} from "./components/music-list/music-list.component";
import {NavbarComponent} from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MusicListComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'La-music';
}

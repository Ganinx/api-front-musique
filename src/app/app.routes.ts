import { Routes } from '@angular/router';
import {MusicListComponent} from "./components/music-list/music-list.component";
import {MusicDetailComponent} from "./components/music-detail/music-detail.component";
import {AddMusiqueComponent} from "./components/add-musique/add-musique.component";
import {EditMusicComponent} from "./components/edit-music/edit-music.component";

export const routes: Routes = [
  {path: '', component:MusicListComponent},
  {path: 'music/:id', component:MusicDetailComponent},
  {path: 'add', component:AddMusiqueComponent},
  {path: 'edit/:id', component:EditMusicComponent}
];

import { Routes } from '@angular/router';
import {MusicListComponent} from "./components/music-list/music-list.component";
import {MusicDetailComponent} from "./components/music-detail/music-detail.component";
import {AddMusiqueComponent} from "./components/add-musique/add-musique.component";
import {EditMusicComponent} from "./components/edit-music/edit-music.component";
import {RegisterComponent} from "./components/register/register.component";
import {LoginComponent} from "./components/login/login.component";
import {authGuard} from "./guards/auth.guard";

export const routes: Routes = [
  {path: '', component:MusicListComponent, canActivate: [authGuard]},
  {path: 'music/:id', component:MusicDetailComponent, canActivate: [authGuard]},
  {path: 'add', component:AddMusiqueComponent, canActivate: [authGuard]},
  {path: 'edit/:id', component:EditMusicComponent, canActivate: [authGuard]},
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent}
];

import { Component } from '@angular/core';
import {Music} from "../../models/music";
import {MusicService} from "../../services/music.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {NgForOf, NgIf} from "@angular/common";
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-edit-music',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    MatSelect,
    NgForOf,
    NgIf,
    RouterLink,
    MatProgressSpinner
  ],
  templateUrl: './edit-music.component.html',
  styleUrl: './edit-music.component.css'
})
export class EditMusicComponent {
  isLoading:boolean = false
  music?:Music
  styles : string[] = ["Rap","Pop", "afro-fusion"]

  constructor(private musicService: MusicService, private router: Router,private snackBar: MatSnackBar
    ,private activatedRoute: ActivatedRoute) {
    this.isLoading = true
    let id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'))
    this.musicService.getOne(id).subscribe(data =>{
      this.isLoading = false
      this.music = data;
    })
  }

  OnEdit(music:Music):void{{
    this.isLoading = true
    this.musicService.edit(music).subscribe(data=>{
        this.router.navigate(['']);
        this.snackBar.open(this.music?.name + ' modifier' ,'fermer',{
          duration: 3000,
        })
      }

    )

  }}
}

import {Component, inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {Router, RouterLink} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {Music} from "../../models/music";
import {NgForOf, NgIf} from "@angular/common";
import {MatOption, MatSelect} from "@angular/material/select";
import {MusicService} from "../../services/music.service";
import {MatSnackBar, MatSnackBarRef} from "@angular/material/snack-bar";
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-add-musique',
  standalone: true,
  imports: [
    MatButton,
    RouterLink,
    FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, NgIf, MatSelect, MatOption, NgForOf, MatProgressSpinner
  ],
  templateUrl: './add-musique.component.html',
  styleUrl: './add-musique.component.css'
})
export class AddMusiqueComponent {

  isLoading:boolean = false
  styles : string[] = ["Rap","Pop", "afro-fusion"]

  music:Music = new Music()

  constructor(private musicService:MusicService, private router:Router,private _snackBar: MatSnackBar) {
  }


  submitForm(music:Music) {
    this.isLoading = true
    this.musicService.add(music).subscribe(data=>{
      console.log(data);
      this.router.navigate(['']);
      this._snackBar.open('Musique rajouté','fermer',{
        duration: 3000,
      })
    }

    )



  }
}

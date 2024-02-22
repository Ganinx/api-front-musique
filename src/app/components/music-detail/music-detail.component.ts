import {Component, Inject, OnInit, Sanitizer} from '@angular/core';
import {MatAnchor, MatButton, MatButtonModule, MatFabButton} from "@angular/material/button";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {MusicService} from "../../services/music.service";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {NgIf} from "@angular/common";
import {Music} from "../../models/music";
import {
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardImage, MatCardSubtitle, MatCardTitle
} from "@angular/material/card";
import {MatBadge} from "@angular/material/badge";
import {DomSanitizer} from "@angular/platform-browser";
import {MusicListComponent} from "../music-list/music-list.component";
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {ModalConfirmComponent} from "../modal-confirm/modal-confirm.component";
import {compileResults} from "@angular/compiler-cli/src/ngtsc/annotations/common";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-music-detail',
  standalone: true,
  imports: [
    MatButton,
    MatAnchor,
    RouterLink,
    MatProgressSpinner,
    NgIf,
    MatCard,
    MatCardActions,
    MatCardAvatar,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardSubtitle,
    MatCardTitle,
    MatBadge,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatButtonModule, MatDividerModule, MatIconModule

  ],
  templateUrl: './music-detail.component.html',
  styleUrl: './music-detail.component.css'
})
export class MusicDetailComponent implements OnInit{

  isLoading = true

  music?:Music
  constructor(private dialog: MatDialog,private router:Router, private activatedRoute:ActivatedRoute,private musicService:MusicService,private sanita:DomSanitizer,private _snackBar: MatSnackBar) {

  }

  ngOnInit() {
    let id= parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'))
    this.musicService.getOne(id).subscribe(data => {
      this.music = data;
      if (typeof this.music.url === "string"){
        this.music.url = this.sanita.bypassSecurityTrustResourceUrl(this.music.url);
      }
      this.isLoading =false
    }
    )

  }






  deleteMusicModal(enterAnimationDuration: string, exitAnimationDuration: string) {
    let dialog = this.dialog.open(ModalConfirmComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    })

    dialog.afterClosed().subscribe(result =>{
      if(result && this.music){
        this.isLoading = true
        this.musicService.delete(this.music).subscribe(date=>{
          this.router.navigate(['']);
          this._snackBar.open("Musique supprimé", "fermer",{
            duration: 3000,
          })

      })
    }else{
        this.isLoading = false
      }
    });
  }
}



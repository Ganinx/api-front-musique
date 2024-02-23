import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {Router, RouterLink} from "@angular/router";
import {User} from "../../models/user";
import {CommonModule} from "@angular/common";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {MatError} from "@angular/material/form-field";
import {UserService} from "../../services/user.service";
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatButton,
    MatInput,
    MatFormField,
    ReactiveFormsModule,
    MatCardContent,
    MatCardTitle,
    MatCard,
    RouterLink,
    MatLabel,
    FormsModule,
    CommonModule,
    MatError,
    MatProgressSpinner
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isLoading = false
  error:string = '';
  user: User = new User()

  constructor(private userService:UserService, private router:Router) {
  }
  submit() {
    this.isLoading = true
    this.userService.login(this.user).subscribe(data => {
      let chaine = JSON.stringify(data);
      let jeton = chaine.split(':')[1].trim().replace(/["{}]/g, '');
      localStorage.setItem('token',jeton)
        this.router.navigate(['']);
        this.userService.isLogin()
      }
      ,error => {
        this.error = error.type
        this.isLoading = false}
    )
  }

}

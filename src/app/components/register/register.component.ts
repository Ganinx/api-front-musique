import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {User} from "../../models/user";
import {NgIf} from "@angular/common";
import {UserService} from "../../services/user.service";
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatFormField,
    MatInputModule,
    MatLabel,
    ReactiveFormsModule,
    RouterLink,
    NgIf, FormsModule, MatProgressSpinner
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form: any;
  isLoading = false
  error:string = ''

  user:User = new User()

  constructor(private userService:UserService, private router:Router) {
  }

  submit() {
  this.isLoading = true
    this.userService.registerUser(this.user).subscribe(data => {
      this.router.navigate(['/login']);
      }
      ,error => {
        this.error = error.type
        this.isLoading = false}
      )
    }
  }


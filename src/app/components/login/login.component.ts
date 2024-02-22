import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {RouterLink} from "@angular/router";
import {User} from "../../models/user";
import {CommonModule} from "@angular/common";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {MatError} from "@angular/material/form-field";

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
    MatError
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  error:string = '';
  user: User = new User()

  submit() {

  }

}

import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {Router, RouterLink} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatIconButton,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  visible = true;


  constructor(private route:Router,private userService:UserService) {
  }

  toggleCollapse(): void {
    this.visible = !this.visible;
  }

  logOut() {
    localStorage.clear()
    this.route.navigate(['/login'])
      this.userService.isLogout()
  }
}

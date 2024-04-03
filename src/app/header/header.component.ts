import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isLoggedIn!: boolean;
  userType:string='';
  

  constructor(private authService: AuthService, private router:Router) {

    this.authService.isLoggedIn.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
    this.authService.isUser.subscribe((userType) => {
      this.userType = userType;
    });

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['home']);
  }
}

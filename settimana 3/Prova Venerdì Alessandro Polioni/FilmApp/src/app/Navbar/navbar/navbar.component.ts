import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { iUser } from '../../Models/i-user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isLoggedIn: boolean = false;

  constructor(private authSvc: AuthService) {}

  ngOnInit() {
    this.authSvc.user$.subscribe((user: iUser | null) => {
      this.isLoggedIn = !!user;
    });
  }

  logout() {
    this.authSvc.logout();
  }

}

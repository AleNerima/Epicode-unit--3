import { Component } from '@angular/core';
import { UsersService } from '../../Services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isNavbarCollapsed: boolean = true;
  searchTerm: string = '';
  filteredUsers: any[] = [];

  constructor(private userService: UsersService) {}

  toggleNavbar(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
}

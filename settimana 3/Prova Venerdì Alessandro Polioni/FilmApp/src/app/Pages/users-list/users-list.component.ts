import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { iUser } from '../../Models/i-user'; // Importa l'interfaccia IUser

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: iUser[] = []; // Utilizza l'interfaccia IUser per definire il tipo degli utenti

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: iUser[]) => { // Assicurati che il metodo getUsers() restituisca un array di IUser
      this.users = data;
    });
  }
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; // Importa NgForm

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userData = {
    email: '',
    password: ''
  };

  submitLogin(form: NgForm): void {
    if (form.valid) {
      // Esegui il login utilizzando i dati dell'utente (this.userData)
      console.log('Dati di accesso:', this.userData);
    }
  }
}

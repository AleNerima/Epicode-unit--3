import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../interface/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) {}

  userData: Auth = {
    email: '',
    password: ''
  };

  submitLogin(form: NgForm) {
    if (form.valid) {

      this.authService.login(this.userData).subscribe((response) => {

        if (response.accessToken) {

          this.router.navigateByUrl('');
          console.log('Login riuscito');
        } else {

          console.log('Credenziali non valide');
        }
      });
    }
  }
}

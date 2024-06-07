import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
  }

  submitLogin(): void {
    if (this.loginForm.valid) {
      const userData = this.loginForm.value;
      this.authService.login(userData).subscribe(
        response => {
          console.log('Login successful:', response);
          // Gestire la risposta e la navigazione
        },
        error => {
          console.error('Login failed:', error);
          // Gestire l'errore
        }
      );
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user!: FormGroup; // Dichiarato come "definitely assigned"

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.user = this.fb.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConf: ['', Validators.required],
      pronouns: ['She/Her'],
      email: ['', [Validators.required, Validators.email]],
      bio: ['', Validators.maxLength(100)],
      propic: ['']
    });
  }

  submitForm(): void {
    if (this.user.valid) {
      const userData = this.user.value;
      // Invia i dati di registrazione al tuo servizio o API
      console.log('Dati di registrazione:', userData);
    }
  }
}

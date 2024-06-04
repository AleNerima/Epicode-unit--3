import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './forum-registrazione.component.html',
  styleUrls: ['./forum-registrazione.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  registeredUsers: any[] = [];  // Array per memorizzare gli utenti registrati

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      genere: ['', Validators.required],
      immagineProfilo: [null],
      biografia: ['']
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {}

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')!.value === form.get('confirmPassword')!.value
      ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.registeredUsers.push(this.registrationForm.value);  // Salva l'utente nell'array
      console.log('Form Submitted', this.registrationForm.value);
      console.log('Registered Users:', this.registeredUsers);  // Visualizza gli utenti registrati nella console
      this.registrationForm.reset();  // Resetta il form dopo la registrazione
    } else {
      console.error('Form is invalid');
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.user = this.fb.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConf: ['', Validators.required],
      pronouns: ['She/Her', Validators.required],
      bio: ['']
    });
  }

  ngOnInit(): void {
  }

  submitForm(): void {
    console.log('Submit button clicked');
    if (this.user.valid) {

      if (this.user.get('password')!.value !== this.user.get('passwordConf')!.value) {

        console.error('Le password non corrispondono');
        return;
      }


      this.authService.signup(this.user.value).subscribe(
        response => {
          console.log('Registrazione avvenuta con successo:', response);

        },
        error => {
          console.error('Registrazione fallita:', error);

        }
      );
    }
  }
}

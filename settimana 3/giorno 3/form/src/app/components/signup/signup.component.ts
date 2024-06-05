import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms"
import { AuthService } from 'src/app/services/auth.service';
import { passwordMatch, passwordValidator } from 'src/app/utils/password.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  user: FormGroup = new FormGroup({
    nome: new FormControl("", [Validators.required]),
    cognome: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required, Validators.minLength(8)]),
    passwordConf: new FormControl("", [Validators.required, Validators.minLength(8)]),
    propic: new FormControl(""),
    pronouns: new FormControl("She/Her", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    bio: new FormControl("", [Validators.minLength(50), Validators.maxLength(100)]),
  }, {
    validators: passwordValidator
  });

  constructor(private authSrv: AuthService) { }

  submitForm() {
    if (this.user.valid) {
      const formValue = { ...this.user.value };
      delete formValue.passwordConf;
      this.authSrv.signup(formValue).subscribe(res => console.log(res));
    } else {
      console.log('Form is invalid');
    }
  }
}

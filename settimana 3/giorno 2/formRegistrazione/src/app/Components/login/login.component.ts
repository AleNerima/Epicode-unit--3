import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted', form.value);
    }
  }
}

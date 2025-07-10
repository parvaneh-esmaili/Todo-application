import { Component } from '@angular/core';
import { IuserModel } from '../../../../_models/user.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../../../_services/auth';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Login {
  constructor(private authService: Auth){}

  userLogin: IuserModel = {
    username : '',
    email: '',
    password: '',
  };

  registerForm:FormGroup = new FormGroup<any> ({
    username : new FormControl(this.userLogin.username,[Validators.required]),
    email : new FormControl(this.userLogin.email,[Validators.required]),
    password : new FormControl(this.userLogin.password,[Validators.required])
  })

   registerBTN() {
    if (this.registerForm.valid) {
      const newUser: IuserModel = this.registerForm.value;
      this.authService.registerUser(newUser).subscribe({
        next: res => console.log('User created', res),
        error: err => console.error('Error creating user', err)
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
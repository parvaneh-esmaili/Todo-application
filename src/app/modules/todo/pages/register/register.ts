import { Component } from '@angular/core';
import { IRegisterUserModel } from '../../../../_models/user.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../../../_services/auth';

@Component({
  selector: 'app-Register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {


  constructor(private authService: Auth){}
  userRegister: IRegisterUserModel = {
    username : '',
    email: '',
    password: '',
  };

  registerForm: FormGroup = new FormGroup<any> ({
    username : new FormControl(this.userRegister.username,[Validators.required]),
    email : new FormControl(this.userRegister.email,[Validators.required]),
    password : new FormControl(this.userRegister.password,[Validators.required])
  })
  registerBTN() {
    if (this.registerForm.valid) {
      const newUser: IRegisterUserModel = this.registerForm.value;
      console.log('Sending register data:', newUser);
      this.authService.registerUser(newUser).subscribe({
        next: res => console.log('User created', res),
        error: err => console.error('Error creating user', err)
      });
    } else {
      console.log('Form is invalid');
  }
}

}
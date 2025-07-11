import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../../../../_services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  constructor(private authService: Auth, private router: Router) {}

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  LogIn() {
    const User = {
      identifier: this.loginForm.value.username,
      password: this.loginForm.value.password
    };

    this.authService.loginUser(User).subscribe((response) => {
      const token = response.jwt;
      this.authService.saveToken(token);
      localStorage.setItem('userID', response.user.id.toString());
      this.router.navigate(['/list']);
    });
  }
}
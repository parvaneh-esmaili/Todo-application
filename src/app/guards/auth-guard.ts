import { CanActivateFn, Router, CanActivate } from '@angular/router';
import { inject } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Auth } from '../_services/auth';

interface JwtClaims {
  id: number;
  iat: number;
  exp: number;
}

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const auth = inject(Auth);
  const token = auth.getToken();
  console.log('guard');

  if (token == null) {
    router.navigate(['/login']);
    return false;
  } else {
    const decoded = jwtDecode<JwtClaims>(token);
    const now = Math.floor(Date.now() / 1000);
    console.log(decoded, now);

    if (now > decoded.exp) {
      localStorage.removeItem('token');
      localStorage.removeItem('userID');
      router.navigate(['/login']);
      return false;
    }

    return true;
  }
};

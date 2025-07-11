import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import {jwtDecode} from 'jwt-decode';
import { Auth } from '../_services/auth';

interface JwtClaims {
  exp: number;
}

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const auth = inject(Auth);
  const token = auth.getToken();

  if (!token) {
    router.navigate(['/login']);
    return false;
  }

  const decoded = jwtDecode<JwtClaims>(token);
  const now = Math.floor(Date.now() / 1000);

  if (now > decoded.exp) {
    localStorage.removeItem("token");
    localStorage.removeItem("userID");
    router.navigate(['/login']);
    return false;
  }

  return true;
};

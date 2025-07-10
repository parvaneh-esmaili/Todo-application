import { CanActivateFn } from '@angular/router';

export const todoGuard: CanActivateFn = (route, state) => {
  return true;
};

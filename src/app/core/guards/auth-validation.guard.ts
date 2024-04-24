import { CanActivateFn } from '@angular/router';

export const authValidationGuard: CanActivateFn = (route, state) => {
  return true;
};

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Dynamically inject services
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true; // Allow access if logged in
  } else {
    authService.logout();
    return true
    // return router.createUrlTree(['/auth/login'], {
    //   queryParams: { returnUrl: state.url }, // Redirect with return URL
    // });
  }
};

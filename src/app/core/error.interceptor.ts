import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toasterService = inject(ToastrService);

  return next(req).pipe((
    catchError((error: HttpErrorResponse) => {
      if (error.status === 200 ) {
        // response type as text
        toasterService.success(error.error.text);
        return throwError(() => new Error());
      }
      let errorMessage = 'An unexpected error occurred.';
      if (error.error instanceof ErrorEvent) {
        errorMessage = `Error: ${error.error.message}`;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }

      // Display error message using a toaster
      toasterService.error(errorMessage);

      // Optionally log the error to an external server
      console.error('Error intercepted:', error);

      // Rethrow the error so it can be handled elsewhere
      return throwError(() => new Error(errorMessage));
    })
  ));
};

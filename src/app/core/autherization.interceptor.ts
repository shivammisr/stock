import { HttpInterceptorFn } from '@angular/common/http';



export const autherizationInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token'); // Retrieve token from local storage

  // Clone the request to add the Authorization header
  let clonedRequest: any;

  if (req.url.includes('/auth/signup') || req.url.includes('/auth/login') )  {
    clonedRequest = req.clone({
      setHeaders: {
        // Authorization: `Bearer ${token || ''}`,
       'Content-Type': 'application/json',
        // Content-Type: application/json
      },
    });
  } else {
    clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token || ''}`,
        'Content-Type': 'application/json',
      },
    });
  }


  // Pass the cloned request to the next handler
  return next(clonedRequest);
};

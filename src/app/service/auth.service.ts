import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CommunicationService } from './communication.service';
import { userAPI } from '../shared/constants/api-endpoints/user-api';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loaderText = '...Loading';

  constructor(
    public communicationService : CommunicationService,
    private toastr: ToastrService,
    public router : Router
  ) { }

  authenticate(data: any): Observable<any> {

    const headers = { 'Content-Type': 'application/json' };
    return this.communicationService.post(userAPI.authenticateUser(), data, headers , this.loaderText).pipe(tap((res: any) => {
      if(res) {
        // console.log(res);
        localStorage.setItem('token', res?.token)
      }
    }))
  }

  isLoggedIn() {
    return localStorage.getItem('token')!.length > 0 ? true : false
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/auth/login'])
  }
}

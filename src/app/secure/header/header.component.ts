import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { CommunicationService } from '../../service/communication.service';
import { userAPI } from '../../shared/constants/api-endpoints/user-api';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../shared/models/user.model';
import { setUser } from '../../shared/store/user/user.action';
// import { state } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  @Input() userName: string = ''; // Replace with dynamic data
  userAvatar: string = 'assets/image/user.png'; // Replace with dynamic data
  dropdownOpen = false; // Controls dropdown visibility
  userDetailsValue : any 
  user$: Observable<User | null>;
  constructor(public authService: AuthService, public router: Router, public communication: CommunicationService, private readonly store:  Store<any>) {
    this.user$ = this.store.select(state => state.user);
    // console.log(this.user$)
    this.user$.subscribe((v : any) => {
      console.log(v)
      this.userName = v?.name
    })
    // console.log(this.$user.subscribe((v) => )
  }

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails () {
    this.authService.communicationService.get(userAPI.getUser(), '', 'text').subscribe((v: any) => {
      this.userDetailsValue = v;
      this.userName = v?.fullName

      const user: User = { id: '1', name: v?.fullName, email: v?.email };
      this.store.dispatch(setUser({ user }));
    })
  }
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/auth/login'])
  }

  userDetails() {
    this.router.navigate(['/profile']);
  }
}

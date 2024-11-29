import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { CommunicationService } from '../../service/communication.service';
import { userAPI } from '../../shared/constants/api-endpoints/user-api';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../shared/models/user.model';
import { updateUser } from '../../shared/store/user/user.action';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css',
    standalone: false
})
export class ProfileComponent implements OnInit {
  defaultAvatar = 'assets/image/user.png'; // Placeholder image
   user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    avatar: '',
    phone: '',
    location: ''
  };

  user$: Observable<User | null> | undefined;

  constructor(public authService: AuthService, public router: Router, public communication: CommunicationService, private readonly store:  Store<any>) {

  }
  ngOnInit(): void {
    this.user$ = this.store.select(state => state.user);
    this.user$.subscribe((v : any) => {
      this.user.name = v?.name
      this.user.email = v?.email
    })
  }

  getUserDetails () {
    this.authService.communicationService.get(userAPI.getUser(), '', 'text').subscribe((v: any) => {
      this.user.name = v?.fullName;
      this.user.email = v?.email
    })
  }

  updateProfile() {
    console.log('Profile updated:', this.user);
    // Call an API to save changes
    this.store.dispatch(updateUser({ user: { name: this.user.name, email: this.user.email} }));
  }



//   clearUserDetails() {
//     this.store.dispatch(clearUser());
//   }

  changeAvatar() {
    console.log('Change Avatar clicked');
    // Logic for changing the avatar, e.g., open a file input dialog
  }
}

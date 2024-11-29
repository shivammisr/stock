import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { setUser, updateUser, clearUser } from './shared/store/user/user.action';
import { User } from './shared/models/user.model';
import { AuthService } from './service/auth.service';
import { userAPI } from './shared/constants/api-endpoints/user-api';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: false
})
export class AppComponent {
  title = 'stock';
  constructor(private store: Store, public authService: AuthService) {}


//   ngOnInit(): void {
//     this.getUserDetails()
// }

// getUserDetails () {
//   this.authService.communicationService.get(userAPI.getUser(), '', 'text').subscribe((v: any) => {
//     // this.user = v?.fullName;
//     // this.userDetailsValue = {email: v.email, name: v.fullName}
//     const user: User = { id: '1', name: 'John Doe', email: 'john.doe@example.com' };
//     this.store.dispatch(setUser({ user }));
//   })
// }
//   setUserDetails() {
//     const user: User = { id: '1', name: 'John Doe', email: 'john.doe@example.com' };
//     this.store.dispatch(setUser({ user }));
//   }

//   updateUserDetails() {
//     this.store.dispatch(updateUser({ user: { name: 'Jane Doe' } }));
//   }

//   clearUserDetails() {
//     this.store.dispatch(clearUser());
//   }
}

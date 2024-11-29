import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { CommunicationService } from '../../service/communication.service';
import { userAPI } from '../../shared/constants/api-endpoints/user-api';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrl: './register.component.css',
    standalone: false
})
export class RegisterComponent {
  signForm: FormGroup;

  constructor(private fb: FormBuilder, public commuicationService: CommunicationService, public toaster: ToastrService, public router: Router) {
    this.signForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      fullName: ['', [Validators.required]],
    });
  }

  goBack() {
    this.router.navigate(['/auth/login'])
  }

  onSignUp(): void {
    const headerDict = {
      'Content-Type': 'application/json',
      'accept': '*/*'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new Headers(headerDict), 
    };
    if (this.signForm.valid) {
      console.log('Sign Up Data:', this.signForm.value);
      // Perform login logic here
      this.commuicationService.post(userAPI.signUpUser(),  this.signForm.value, requestOptions.headers).subscribe((res) => {
        if(res) {
          this.toaster.success('Form Submitted Successfully');
          this.router.navigate(['/auth/login']);
        }
      })
    }
  }
}

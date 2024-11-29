import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    standalone: false
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, public authservice: AuthService, public toastr : ToastrService, public router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  showSuccess(message: string) {
    this.toastr.success(message);
  }

  onLogin(): void {
   
    if (this.loginForm.valid) {
      this.authservice.authenticate(this.loginForm.value).subscribe((v: any) =>{
        console.log('navigate page')
        this.showSuccess('successfully logged');
        this.router.navigate(['\home'])
        });
    }
  }
}

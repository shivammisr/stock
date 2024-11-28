import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { userAPI } from '../../shared/constants/api-endpoints/user-api';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.css'
})
export class PageLayoutComponent implements OnInit {

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { TransactionDialogComponent } from './transaction-dialog/transaction-dialog.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { autherizationInterceptor } from '../core/autherization.interceptor';
import { CommunicationService } from '../service/communication.service';
import { AuthService } from '../service/auth.service';
import { AppLoaderService } from '../service/app-loader.service';
import { PortfolioComponent } from './portfolio/portfolio.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    PageLayoutComponent,
    TransactionDialogComponent,
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SecureRoutingModule
  ],
  providers: [
    provideHttpClient(withInterceptors([autherizationInterceptor])),
    // CommunicationService,
    // AuthService,
    // AppLoaderService,
  ]
})
export class SecureModule { }

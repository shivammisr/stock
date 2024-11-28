import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from '../core/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path:'home', component: DashboardComponent, canActivate: [authGuard]},
  {path:'profile', component: ProfileComponent, canActivate: [authGuard]},
  {path:'portfolio', component: PortfolioComponent, canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }

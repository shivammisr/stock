import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { authGuard } from './core/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('../app/public/public-module.module').then(m => m.PublicModuleModule)
  },
  {
    path: '',
    loadChildren: () => import('../app/secure/secure.module').then(m => m.SecureModule),
    // canActivateChild: [authGuard]
  },

  {
    path: '**',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

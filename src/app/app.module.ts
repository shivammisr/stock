import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { autherizationInterceptor } from './core/autherization.interceptor';
import { CommunicationService } from './service/communication.service';
import { AuthService } from './service/auth.service';
import { AppLoaderService } from './service/app-loader.service';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './shared/store/user/user.reducer';
import { errorInterceptor } from './core/error.interceptor';
// import { HttpClientModule } from '@angular/common/http';
import { BaseChartDirective, provideCharts, withDefaultRegisterables    } from 'ng2-charts'; // Import ChartsModule
import {  stockReducer } from './shared/store/stock/stock.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HttpClientModule,
    BaseChartDirective ,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    StoreModule.forRoot({ 'user': userReducer,  stock: stockReducer  })
    
    
  ],
  providers: [
    // provideClientHydration()
    provideHttpClient(withInterceptors([autherizationInterceptor, errorInterceptor])),
    CommunicationService,
    AuthService,
    AppLoaderService,
    // provideCharts(withDefaultRegisterables())
    // {
    //   provide: withInterceptors,
    //   useValue: autherizationInterceptor,
    //   multi: true, // Allows multiple interceptors
    // },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesModule } from './modules/modules.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommunicationService } from '../service/communication.service';
import { AuthService } from '../service/auth.service';
import { AppLoaderService } from '../service/app-loader.service';
import { provideHttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
const exportable = [
  ModulesModule,
  ReactiveFormsModule,
  FormsModule
]


@NgModule({
  declarations: [],
  imports: [
    exportable
  ],
  exports: [exportable],
  providers: [
    // CommunicationService,
    // AuthService,
    // AppLoaderService,
    // provideHttpClient(),
  ]
})
export class SharedModule { }

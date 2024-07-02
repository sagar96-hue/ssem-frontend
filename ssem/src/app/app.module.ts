import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { FormsModule } from '@angular/forms';
import { TrainingDeliveryReportComponent } from './training-delivery-report/training-delivery-report.component';
import { SseTrainingReportComponent } from './sse-training-report/sse-training-report.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SseDashboardComponent } from './sse-dashboard/sse-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    TrainingDeliveryReportComponent,
    SseTrainingReportComponent,
    HeaderComponent,
    SidebarComponent,
    SseDashboardComponent
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgSelectModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

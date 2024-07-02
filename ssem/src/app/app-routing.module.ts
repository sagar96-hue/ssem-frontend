import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { TrainingDeliveryReportComponent } from './training-delivery-report/training-delivery-report.component';
import { SseTrainingReportComponent } from './sse-training-report/sse-training-report.component';
import { SseDashboardComponent } from './sse-dashboard/sse-dashboard.component';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'forgot-password',
    component:ForgotPasswordComponent
  },
  {
    path:'training-delivery-report',
    component:TrainingDeliveryReportComponent
  },
  {
    path:'sse-training-report',
    component:SseTrainingReportComponent
  },
  {
    path:'sse-dashboard',
    component:SseDashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

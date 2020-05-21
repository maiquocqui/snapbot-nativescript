import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { VerifyCodeComponent } from './verify-code/verify-code.component';
import { ResetComponent } from './reset/reset.component';
import { ModalSuccessComponent } from './modal-success/modal-success.component';
import { ModalErrorComponent } from './modal-error/modal-error.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { VerifyPhoneComponent } from './verify-phone/verify-phone.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

import { components } from './components';
import { HomePageComponent } from './home-page/home-page.component'
import { SwapComponent } from './swap/swap.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { RewardsComponent } from './rewards/rewards.component';
import { RewardsReportComponent } from './rewards-report/rewards-report.component';
import { PerformanceComponent } from './performance/performance.component';
import { services } from './services'
import { NativeScriptUIChartModule } from 'nativescript-ui-chart/angular/chart-directives';
import { PerformanceChartComponent } from './performance-chart/performance-chart.component';
import { PerformanceWeeklyComponent } from './performance-weekly/performance-weekly.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  declarations: [
    ...components,
    AppComponent,
    HomeComponent,
    LoginComponent,
    VerifyCodeComponent,
    ResetComponent,
    ModalSuccessComponent,
    ModalErrorComponent,
    CreateAccountComponent,
    VerifyPhoneComponent,
    VerifyEmailComponent,
    HomePageComponent,
    SwapComponent,
    WithdrawComponent,
    RewardsComponent,
    RewardsReportComponent,
    PerformanceComponent,
    PerformanceChartComponent,
    PerformanceWeeklyComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptUIChartModule
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [...services]
})
export class AppModule { }


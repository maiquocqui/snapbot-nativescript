import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { VerifyCodeComponent } from './verify-code/verify-code.component';
import { ResetComponent } from './reset/reset.component';
import { ModalSuccessComponent } from './modal-success/modal-success.component';
import { ModalErrorComponent } from './modal-error/modal-error.component';
import { CreateAccountComponent } from './create-account/create-account.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'verify-code', component: VerifyCodeComponent },
  { path: 'reset-password', component: ResetComponent },
  { path: 'modal-success', component: ModalSuccessComponent },
  { path: 'modal-error', component: ModalErrorComponent },
  { path: 'create-account', component: CreateAccountComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }

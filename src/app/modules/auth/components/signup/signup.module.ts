import { SessionService } from './../../../../services/session.service';
import { AuthService } from './../../../../services/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/modules/shared/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';
import { VerifyOtpComponent } from '../verify-otp/verify-otp.component';
const routes: Routes = [
  {
    path: '',
    component: SignupComponent
  }
];

@NgModule({
  declarations: [SignupComponent, VerifyOtpComponent],
  imports: [
    RouterModule.forChild(routes),
    MaterialModule,
    InternationalPhoneNumberModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [AuthService, SessionService]
})
export class SignupModule {}

import { ForgotPasswordComponent } from './../forgot-password/forgot-password.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/modules/shared/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent],
  imports: [
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  exports: [RouterModule]
})
export class LoginModule {}

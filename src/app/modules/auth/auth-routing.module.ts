import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    component: AuthComponent,
    loadChildren: () =>
      import('./components/login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: 'signup',
    component: AuthComponent,
    loadChildren: () =>
      import('./components/signup/signup.module').then(mod => mod.SignupModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}

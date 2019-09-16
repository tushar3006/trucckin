import { BookingModule } from './components/booking/booking.module';
import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  // { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  {
    path: 'home',
    component: DashboardComponent,
    pathMatch: 'full',
    loadChildren: () =>
      import('../home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'booking',
    component: DashboardComponent,
    pathMatch: 'full',
    loadChildren: () =>
      import('../dashboard/components/booking/booking.module').then(
        mod => mod.BookingModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}

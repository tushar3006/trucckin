import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingsComponent } from './bookings.component';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {
    path: '',
    component: BookingsComponent
  }
];

@NgModule({
  declarations: [BookingsComponent, ListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class BookingsModule {}

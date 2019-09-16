import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { TruckDetailsComponent } from './components/truck-details/truck-details.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { MaterialModule } from 'src/app/modules/shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: BookingComponent
  }
];

@NgModule({
  declarations: [
    BookingComponent,
    AssignmentComponent,
    TruckDetailsComponent,
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC3QfF6318qTwY_RxV8VzDmSHbchVxEvwo',
      libraries: ['places']
    })
  ]
})
export class BookingModule {}

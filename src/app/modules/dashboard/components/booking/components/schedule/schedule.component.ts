import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  @ViewChild('datePicker', { static: false }) dateElementRef: ElementRef;
  @ViewChild('timePicker', { static: false }) timeElementRef: ElementRef;
  constructor() {}
  public scheduleForm = new FormGroup({
    quantity: new FormControl('')
  });
  ngOnInit() {}
}

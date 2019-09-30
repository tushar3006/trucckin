import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { typeConst } from 'src/app/constants/type.constants';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  @ViewChild('datePicker', { static: false }) dateElementRef: ElementRef;
  @ViewChild('timePicker', { static: false }) timeElementRef: ElementRef;
  constructor() {}
  @Output() updateSchedule = new EventEmitter();
  @Output() updatePath = new EventEmitter();
  public scheduleForm = new FormGroup({
    date: new FormControl(''),
    time: new FormControl('')
  });
  onPressBackBtn() {
    this.updatePath.emit({ pathName: typeConst.TRUCK_DETAILS });
  }
  onSelectSchedule() {
    this.updateSchedule.emit(this.scheduleForm.value);
    this.updatePath.emit({ pathName: typeConst.HOME });
  }
  ngOnInit() {}
}

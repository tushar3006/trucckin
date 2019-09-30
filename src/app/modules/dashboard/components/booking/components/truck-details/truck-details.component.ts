import { UserService } from './../../../../../../services/user.service';
import { Component, OnInit, Output, EventEmitter, NgZone } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { typeConst } from 'src/app/constants/type.constants';
declare const google: any;

@Component({
  selector: 'app-truck-details',
  templateUrl: './truck-details.component.html',
  styleUrls: ['./truck-details.component.scss']
})
export class TruckDetailsComponent implements OnInit {
  constructor(protected userService: UserService, protected ngZone: NgZone) {}

  public truckDetailsForm = new FormGroup({
    quantity: new FormControl('')
  });
  public trucks = [];
  @Output() updateTruckDetails = new EventEmitter();
  @Output() updatePath = new EventEmitter();
  public selectedTruck: any;
  selectTruck(truck) {
    this.selectedTruck = truck;
  }
  onPressBackBtn() {
    this.updatePath.emit({ pathName: typeConst.TRUCK_DETAILS });
  }
  onUpdateTruckDetails() {
    this.updateTruckDetails.emit({
      quantity: this.truckDetailsForm.controls.quantity.value,
      truckDetails: this.selectedTruck
    });
    this.updatePath.emit({ pathName: typeConst.SCHEDULE });
  }
  ngOnInit() {
    this.userService.getTrucks().then(res => {
      this.ngZone.run(() => {
        this.trucks = [...res];
        this.selectTruck(this.trucks[0]);
      });
    });
  }
}

import { UserService } from './../../../../../../services/user.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { typeConst } from 'src/app/constants/type.constants';
declare const google: any;
@Component({
  selector: 'app-truck-details',
  templateUrl: './truck-details.component.html',
  styleUrls: ['./truck-details.component.scss']
})
export class TruckDetailsComponent implements OnInit {
  constructor(protected userService: UserService) {}
  public truckDetailsForm = new FormGroup({
    quantity: new FormControl('')
  });
  public trucks = [];
  @Output() updateTruckDetails = new EventEmitter();
  @Output() updatePath = new EventEmitter();
  public selectedTruckId;
  selectTruck(truck) {
    this.selectedTruckId = truck.truckType;
  }
  onUpdateTruckDetails() {
    this.updateTruckDetails.emit({
      quantity: this.truckDetailsForm.controls.quantity.value,
      truckType: this.selectedTruckId
    });
    this.updatePath.emit({ pathName: typeConst.SCHEDULE });
  }
  ngOnInit() {
    this.userService.getTrucks().then(res => {
      this.trucks = [...res];
    });
  }
}

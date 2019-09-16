import { typeConst } from 'src/app/constants/type.constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;
  public activePath = typeConst.HOME;
  public typeConst;
  public assignments = [];
  public activeAssignment;
  constructor() {
    this.typeConst = typeConst;
  }

  changeActivePath({ pathName }) {
    this.activePath = pathName;
  }

  onAddAssignment() {
    this.assignments.push({});
    this.activeAssignment = this.assignments.length - 1;
    this.changeActivePath({ pathName: typeConst.ADD_ASSIGNMENT });
  }

  afterUpdateAssignment(data) {
    if (!data.type) {
      this.assignments.splice(data.index, 1);
    }
    if (data.type === typeConst.PICKUP) {
      this.assignments[data.index] = {
        ...this.assignments[data.index],
        pickupAddress: data.place.formatted_address,
        pickupLat: data.place.geometry.location.lat(),
        pickupLng: data.place.geometry.location.lng()
      };
    } else {
      this.assignments[data.index] = {
        ...this.assignments[data.index],
        dropAddress: data.place.formatted_address,
        dropLat: data.place.geometry.location.lat(),
        dropLng: data.place.geometry.location.lng()
      };
    }

    console.log(this.assignments);
  }
  ngOnInit() {}
}

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
  public markers = [];
  public polylines = [];
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

  updateMarkerList() {
    this.markers = [];
    for (let i = 0; i < this.assignments.length; i++) {
      if (this.assignments[i].pickup) {
        this.markers.push({
          lat: this.assignments[i].pickup.lat,
          lng: this.assignments[i].pickup.lng,
          type: this.assignments[i].pickup.type,
          label: 'P'
        });
      }
      if (this.assignments[i].dropoff) {
        this.markers.push({
          lat: this.assignments[i].dropoff.lat,
          lng: this.assignments[i].dropoff.lng,
          type: this.assignments[i].dropoff.type,
          label: 'D'
        });
      }
    }
  }

  afterUpdateTruckDetails(data) {
    this.assignments[this.activeAssignment] = {
      ...this.assignments[this.activeAssignment],
      ...data
    };
  }

  afterUpdateSchedule(data) {
    this.assignments[this.activeAssignment] = {
      ...this.assignments[this.activeAssignment],
      ...data
    };

    console.log(this.assignments);
  }

  afterUpdateAssignment(data) {
    if (!this.assignments[data.index]) {
      this.assignments[data.index] = {};
    }
    if (!data.type) {
      this.assignments.splice(data.index, 1);
    }
    if (data.type === typeConst.PICKUP) {
      this.assignments[data.index].pickup = {
        ...this.assignments[data.index],
        address: data.place.formatted_address,
        lat: data.place.geometry.location.lat(),
        lng: data.place.geometry.location.lng(),
        type: typeConst.PICKUP
      };
    } else {
      this.assignments[data.index].dropoff = {
        ...this.assignments[data.index].dropoff,
        address: data.place.formatted_address,
        lat: data.place.geometry.location.lat(),
        lng: data.place.geometry.location.lng(),
        type: typeConst.DELIVERY
      };
    }
    this.updateMarkerList();
    // this.updatePolylines();
    // console.log(this.assignments);
  }
  ngOnInit() {}
}

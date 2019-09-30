import { typeConst } from 'src/app/constants/type.constants';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AgmMap, LatLngBounds } from '@agm/core';
declare const google: any;

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit, AfterViewInit {
  @ViewChild('AgmMap', { static: false }) agmMap: AgmMap;
  lat = 51.678418;
  lng = 7.809007;
  public activePath = typeConst.HOME;
  public typeConst;
  public assignments = [
    {
      pickup: {
        address: 'Chandigarh, India',
        lat: 30.7333148,
        lng: 76.7794179,
        type: 'PICKUP'
      },
      dropoff: {
        address: 'Sahibzada Ajit Singh Nagar, Punjab, India',
        lat: 30.7046486,
        lng: 76.71787259999996,
        type: 'DELIVERY'
      },
      quantity: '12',
      truckDetails: {
        truckType: 11,
        truckName: 'Container Trucks'
      },
      date: '2019-09-19T18:30:00.000Z',
      time: '12:00 AM'
    }
  ];

  public markers = [];
  public polylines = [];
  public activeAssignment;
  public mapBounds: LatLngBounds;
  public mapInstance;
  constructor() {
    this.typeConst = typeConst;
  }

  changeActivePath({ pathName }) {
    this.activePath = pathName;
  }

  onExit() {
    if (this.activeAssignment) {
      this.assignments.splice(this.activeAssignment, 1);
      this.updateMarkerList();
      this.changeActivePath({ pathName: typeConst.HOME });
    }
  }

  onAddAssignment() {
    this.assignments.push({});
    this.activeAssignment = this.assignments.length - 1;
    this.changeActivePath({ pathName: typeConst.ADD_ASSIGNMENT });
  }

  updateBounds() {
    this.mapBounds = new google.maps.LatLngBounds();
    this.markers.forEach(marker => {
      const tempPosition = new google.maps.LatLng(marker.lat, marker.lng);
      this.mapBounds.extend(tempPosition);
    });
    console.log(this.mapInstance, this.mapBounds);
    this.mapInstance.fitBounds(this.mapBounds);
  }

  checkout() {}

  updateMarkerList() {
    let markers = (this.markers = []);
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

    this.updateBounds();
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
  // ngAfterViewInit() {
  //   setTimeout(() => {
  //     this.mapBounds = new google.maps.LatLngBounds();
  //   }, 1000);
  // }

  ngAfterViewInit() {
    this.agmMap.mapReady.subscribe(map => {
      this.mapInstance = map;

      this.updateMarkerList();
    });
  }
}

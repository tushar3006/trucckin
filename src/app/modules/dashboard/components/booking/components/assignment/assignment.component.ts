import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  NgZone,
  Output,
  EventEmitter,
  Input
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { typeConst } from 'src/app/constants/type.constants';
@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit, AfterViewInit {
  public bookingForm = new FormGroup({
    pickup: new FormControl(''),
    dropoff: new FormControl('')
  });

  @Output() updateAssignment = new EventEmitter();
  @Output() updatePath = new EventEmitter();
  @Input() assignmentIndex;
  @ViewChild('pickup', { static: false })
  pickupElementRef: ElementRef;
  @ViewChild('dropoff', { static: false }) dropElementRef: ElementRef;
  constructor(public ngZone: NgZone, public mapsApiLoader: MapsAPILoader) {}

  onChangeAddress(place) {}
  findAdress() {
    this.mapsApiLoader.load().then(() => {
      let autocompletePickup = new google.maps.places.Autocomplete(
        this.pickupElementRef.nativeElement
      );
      let autocompleteDrop = new google.maps.places.Autocomplete(
        this.dropElementRef.nativeElement
      );

      autocompleteDrop.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // some details
          let place: google.maps.places.PlaceResult = autocompleteDrop.getPlace();
          console.log(place);
          this.updateAssignment.emit({
            place,
            type: typeConst.DELIVERY,
            index: this.assignmentIndex
          });
        });
      });
      autocompletePickup.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // some details
          let place: google.maps.places.PlaceResult = autocompletePickup.getPlace();

          this.updateAssignment.emit({
            place,
            type: typeConst.PICKUP,
            index: this.assignmentIndex
          });
        });
      });
    });
  }
  ngOnInit() {}

  updateAddress() {
    this.updatePath.emit({ pathName: typeConst.TRUCK_DETAILS });
  }
  ngAfterViewInit() {
    this.findAdress();
  }
}

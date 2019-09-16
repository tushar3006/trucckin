import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-truck-details',
  templateUrl: './truck-details.component.html',
  styleUrls: ['./truck-details.component.scss']
})
export class TruckDetailsComponent implements OnInit {
  constructor() {}
  public truckDetailsForm = new FormGroup({
    quantity: new FormControl('')
  });
  ngOnInit() {}
}

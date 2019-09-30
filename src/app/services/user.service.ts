import { environment } from '../../environments/environment';
import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { apiConstants } from '../constants/api.constants';

@Injectable()
export class UserService {
  constructor(public apiService: ApiService) {}
  getTrucks() {
    return new Promise((resolve, reject) => {
      return this.apiService[apiConstants.USER.TRUCKS.METHOD](
        apiConstants.USER.TRUCKS.URL,
        {}
      ).subscribe(response => {
        resolve(response.data);
      });
    });
  }

  createBooking(bookingData) {
    return new Promise((resolve, reject) => {
      return this.apiService[apiConstants.USER.CREATE_BOOKING.METHOD](
        apiConstants.USER.CREATE_BOOKING.URL,
        {}
      ).subscribe(response => {
        resolve(response.data);
      });
    });
  }
}

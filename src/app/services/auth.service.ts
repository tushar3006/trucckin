import { environment } from '../../environments/environment';
import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { apiConstants } from '../constants/api.constants';

@Injectable()
export class AuthService {
  constructor(public apiService: ApiService) {}
  login(data) {
    let loginObj = {
      ...data,
      deviceType: 'IOS',
      deviceToken: ''
    };
    return this.apiService[apiConstants.AUTH.LOGIN.METHOD](
      apiConstants.AUTH.LOGIN.URL,
      loginObj
    );
  }
  signup(data) {
    let signupObj = {
      ...data,
      deviceType: 'IOS',
      deviceToken: 'asdkjgak jsgjahskgj '
    };

    return new Promise((resolve, reject) => {
      return this.apiService[apiConstants.AUTH.SIGNUP.METHOD](
        apiConstants.AUTH.SIGNUP.URL,
        signupObj
      ).subscribe(
        d => {
          return resolve(d.data);
        },
        e => {
          // if(e.responseType === 'USER_EMAIL_ALREADY_EXIST' || e.responseType === '')
        }
      );
    });
  }
  loginViaAccessToken(data) {
    let loginObj = {
      deviceType: 'IOS'
    };
    return this.apiService[apiConstants.AUTH.LOGIN_VIA_ACCESS_TOKEN.METHOD](
      apiConstants.AUTH.LOGIN_VIA_ACCESS_TOKEN.URL,
      loginObj
    );
  }

  verifyOtp(data) {
    let otpObj = {
      ...data
    };
    return new Promise((resolve, reject) => {
      return this.apiService[apiConstants.AUTH.VERIFY_OTP.METHOD](
        apiConstants.AUTH.VERIFY_OTP.URL,
        otpObj
      ).subscribe(d => {
        console.log(d);
        return resolve(d.data);
      });
    });
  }

  resetPassword(data) {
    let obj = {
      ...data
    };
    return this.apiService[apiConstants.AUTH.RESET_PASSWORD.METHOD](
      apiConstants.AUTH.RESET_PASSWORD.URL,
      obj
    );
  }

  resendOtp(data) {
    let obj = {
      ...data
    };
    return this.apiService[apiConstants.AUTH.RESEND_OTP.METHOD](
      apiConstants.AUTH.RESEND_OTP.URL,
      obj
    );
  }
}

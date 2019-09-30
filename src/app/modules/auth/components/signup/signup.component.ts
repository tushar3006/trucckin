import { SessionService } from './../../../../services/session.service';
import { AuthService } from './../../../../services/auth.service';
import { typeConst } from 'src/app/constants/type.constants';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public typeConst = typeConst;
  public activePath = typeConst.VERIFY_OTP;
  public signupForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    phoneNo: new FormControl(''),
    countryCode: new FormControl('')
  });
  constructor(
    public authService: AuthService,
    private sessionService: SessionService
  ) {}

  ngOnInit() {}

  onSignup() {
    this.authService.signup(this.signupForm.value).then(response => {
      this.sessionService.set('access_token', response.access_token);
      this.sessionService.set('user_data', response);
      this.setActivePath(typeConst.VERIFY_OTP);
    });
  }

  setActivePath(path) {
    this.activePath = path;
  }
}

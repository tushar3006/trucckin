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
  public activePath = typeConst.SIGNUP;
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

  onLogin() {
    this.authService.signup(this.signupForm.value).then(d => {
      this.sessionService.set('access_token', d.accessToken);
      this.sessionService.set('user_data', d);
      this.setActivePath(typeConst.VERIFY_OTP);
    });
  }

  setActivePath(path) {
    this.activePath = path;
  }
}

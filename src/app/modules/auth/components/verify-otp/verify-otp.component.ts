import { SessionService } from './../../../../services/session.service';
import { AuthService } from './../../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOtpComponent implements OnInit {
  public otpForm = new FormGroup({
    otp: new FormControl('')
  });
  constructor(
    private authService: AuthService,
    private sessionService: SessionService
  ) {}

  ngOnInit() {}

  onVerifyotp() {
    this.authService.verifyOtp(this.otpForm.value).then(d => {
      console.log(d);
    });
  }
}

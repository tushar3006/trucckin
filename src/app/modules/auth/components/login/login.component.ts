import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup } from '@angular/forms';
import { typeConst } from 'src/app/constants/type.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public typeConst = typeConst;
  public activePath = typeConst.FORGOT_PASS;
  public loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor() {}

  ngOnInit() {}

  onLogin() {
    console.log(this.loginForm.value);
  }
}

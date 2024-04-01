import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginModel } from '../../core/models/login-model';
import { AuthenticationService } from '../../core/services/authentication.service';
import { LoginService } from '../../core/services/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: '../../app.component.scss'
})
export class ForgotPasswordComponent {
  forgotForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthenticationService,
    public loginService: LoginService,
  ) { }

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group
      (
        {
          email: ["", Validators.required, Validators.email],
          password: ["", Validators.required]
        }
      );
  }

  tryLogin() {
    if (this.forgotForm.invalid) {
      return;
    }
    const dataLogin = this.forgotForm.getRawValue() as LoginModel;
    // const params = {
    //   "email": "hercules.nakai@42we.tech",
    //   "password": "12345678"
    // }
    const TOKEN = this.authService.login(dataLogin);
    // if (user && user.token) {
    //   localStorage.setItem("currentUser", JSON.stringify(user));
    //   localStorage.setItem("Authorization", `${user.token}`);
    //   this.currentUserSubject.next(user);
    // } else {
    //   this.router.navigate(["/login"]);
    // }
  }
}
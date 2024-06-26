import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from '../../core/models/login-model';
import { LoginService } from '../../core/services/login.service';
import { AuthenticationService } from '../../core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: '../../app.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthenticationService,
    public loginService: LoginService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group
      (
        {
          email: ["", Validators.required, Validators.email],
          password: ["", Validators.required]
        }
      );
  }

  submitLogin() {
    if (this.loginForm.invalid) {
      return;
    }
    const dataLogin = this.loginForm.getRawValue() as LoginModel;
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

  goToUrl(): void {
    window.location.href = "https://www.google.com";
  }
}

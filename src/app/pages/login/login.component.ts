import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from '../../core/models/login-model';
import { LoginService } from '../../core/services/login.service';
import { Token } from '@angular/compiler';
import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public loginService: LoginService,
    private httpClient: HttpClient
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
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // "Accept": "application"
        // "Access-Control-Allow-Origin": '*'
      })
    }

    const data = {
      "email": "hercules.nakai@42we.tech",
      "password": "12345678"
    }

    this.httpClient.post('http://192.168.18.20:5000/api/auth/login', data, httpOptions).subscribe((user) => {
      console.log(user);
      // login successful if there's a jwt token in the response
      // if (user && user.token) {
      //   // localStorage.setItem("currentUser", JSON.stringify(user));
      //   // localStorage.setItem("Authorization", `${user.token}`);

      //   // this.currentUserSubject.next(user);
      // } else {
      //   // this.router.navigate(["/login"]);
      // }
      // return user;
    });
    // const dataLogin = this.loginForm.getRawValue() as LoginModel;
    //httpClient.post<any>("http:localhost:3000/test-back", {oi: "oi"})

    // this.loginService.loginUser().subscribe(
    //   token => {
    //     console.log("Deu certo foi de mais ", dataLogin, token);
    //     this.router.navigate(["/"]);
    //   },
    //   erro => {
    //     console.log("Deu errado", dataLogin, erro);
    //     // alert("Erro inesperado")
    //   })
  }
  goToUrl(): void {
    window.location.href = "https://www.google.com";
  }
}

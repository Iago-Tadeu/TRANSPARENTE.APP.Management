import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { Router } from "@angular/router";
import { AppGlobals } from "../../app.globals";
import { LoginModel } from "../models/login-model";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  private baseAPIUrl = environment.endPoint;

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private _global: AppGlobals
  ) {
  }
  login(customer: LoginModel) {
    this.httpClient.post(
      `${this.baseAPIUrl}/auth/login`, JSON.stringify(customer), this._global.httpOptions).subscribe(
        user => {
          console.log(user);
          this.router.navigate(["/home"]);
          // _user = user.data.["token"];
          // return user;
          // localStorage.setItem("currentUser", JSON.stringify(user));
          // localStorage.setItem("Authorization", `${user.token}`);
          // this.currentUserSubject.next(user);
        },
        error => { console.log("Erro ${error}"); this.router.navigate(["/login"]); });
  }

  logout() {
    this.httpClient
      .post(`${this.baseAPIUrl}/logout`, this._global.httpOptions)
      .subscribe(() => {
        this.router.navigate(["/login"]);
        return false;
      });
  }
}

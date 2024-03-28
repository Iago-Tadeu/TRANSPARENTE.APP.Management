import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { Router } from "@angular/router";
import { UserModel } from "../models/user-model";
import { AppGlobals } from "../../app.globals";
import { LoginModel } from "../models/login-model";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  // private currentUserSubject: BehaviorSubject<UserModel>;
  // public currentUser: Observable<UserModel>;
  private baseAPIUrl = environment.endPoint;

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private _global: AppGlobals
  ) {
    // this.currentUserSubject = new BehaviorSubject<UserModel>(
      // JSON.stringify(localStorage.getItem("currentUser"))
    // );
    // this.currentUser = this.currentUserSubject.asObservable();
  }

  // public get currentUserValue(): UserModel {
  //   return this.currentUserSubject.value;
  // }

  login(customer: LoginModel) {
    // const params = {
    //   "email": "hercules.nakai@42we.tech",
    //   "password": "12345678"
    // }
    this.httpClient.post('http://192.168.18.20:5000/api/auth/login', JSON.stringify(customer), this._global.httpOptions).subscribe((user) => {
      console.log(user);
      return user;
    // return this.httpClient.get(`https://webhook.site/7f601704-f9b8-43bd-85e1-16294b13f5b2/post`).subscribe((user) => {
    //   console.log(user);
  });
    // return this.httpClient.post<any>(`${this.baseAPIUrl}/login`, user).pipe(
    //   map((user) => {
    //     if (user && user.token) {
    //       localStorage.setItem("currentUser", JSON.stringify(user));
    //       localStorage.setItem("Authorization", `${user.token}`);
    //       this.currentUserSubject.next(user);
    //     } else {
    //       this.router.navigate(["/login"]);
    //     }
    //     return user;
    //   })
    // );
  }

  logout() {
    this.httpClient
      .post(`${this.baseAPIUrl}/logout`, this._global.httpOptions)
      .subscribe((res) => {
        // localStorage.removeItem("currentUser");
        // localStorage.removeItem("Authorization");
        // this.currentUserSubject.next(null);
        this.router.navigate(["/login"]);
        return false;
      });
  }
}

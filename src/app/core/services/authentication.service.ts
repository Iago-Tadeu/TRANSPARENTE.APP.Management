import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { tap, map } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { Router } from "@angular/router";
import { UserModel } from "../models/user-model";
import { AppGlobals } from "../../app.globals";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<UserModel>;
  public currentUser: Observable<UserModel>;
  private baseAPIUrl = environment.baseAPIUrl;

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private _global: AppGlobals
  ) {
    this.currentUserSubject = new BehaviorSubject<UserModel>(
      JSON.stringify(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserModel {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    const params = {
      email: username,
      password,
    };

    return this.httpClient.post<any>(`${this.baseAPIUrl}/login`, params).pipe(
      map((user) => {
        if (user && user.token) {
          localStorage.setItem("currentUser", JSON.stringify(user));
          localStorage.setItem("Authorization", `${user.token}`);

          this.currentUserSubject.next(user);
        } else {
          this.router.navigate(["/login"]);
        }
        return user;
      })
    );
  }

  logout() {
    this.httpClient
      .post(`${this.baseAPIUrl}/logout`, this._global.httpOptions)
      .subscribe((res) => {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("Authorization");
        // this.currentUserSubject.next(null);
        this.router.navigate(["/login"]);
        return false;
      });
  }
}

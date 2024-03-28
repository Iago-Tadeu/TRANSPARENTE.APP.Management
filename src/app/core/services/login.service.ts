import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LoginModel } from "../models/login-model";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: "root"
})


export class LoginService {
  constructor(private httpClient: HttpClient) { }
  private readonly baseUrl = environment["endPoint"];


  loginUser() {
    // console.log("TESTE");
    // const params = {
    //   "email": "hercules.nakai@42we.tech",
    //   "password": "231623712387"
    // }

    // this.httpClient.get<any>("https://webhook.site/7f601704-f9b8-43bd-85e1-16294b13f5b2/get");

    return this.httpClient.get(`https://webhook.site/7f601704-f9b8-43bd-85e1-16294b13f5b2/post`).subscribe((user) => {
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

    // return this.httpClient.post<any>(`https://webhook.site/7f601704-f9b8-43bd-85e1-16294b13f5b2/post`, params).pipe(
    //   map((user) => {
    //     console.log(user);
    //     // login successful if there's a jwt token in the response
    //     // if (user && user.token) {
    //     //   // localStorage.setItem("currentUser", JSON.stringify(user));
    //     //   // localStorage.setItem("Authorization", `${user.token}`);

    //     //   // this.currentUserSubject.next(user);
    //     // } else {
    //     //   // this.router.navigate(["/login"]);
    //     // }
    //     return user;
    //   })
    // );

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json'
    //   })
    // }

    // const data = {
    //   "email": "hercules.nakai@42we.tech",
    //   "password": "231623712387"
    // }
    // console.log(object);
    // return this.httpClient.post<any>("https://webhook.site/7f601704-f9b8-43bd-85e1-16294b13f5b2", data);
    // return this.httpClient.post<any>(this.baseUrl + "/testback", data);
  }
}
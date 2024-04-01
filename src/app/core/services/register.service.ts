import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { UserModel } from "../models/user-model";
import { AppGlobals } from "../../app.globals";

@Injectable({
  providedIn: "root"
})
export class RegisterService {
  constructor(private httpClient: HttpClient,
    private _global: AppGlobals) { }

  private readonly baseUrl = environment.endPoint;
  registerUser(user: UserModel) {
    this.httpClient.post(
      '${this.baseUrl}/auth/register', JSON.stringify(user), this._global.httpOptions).subscribe(
        user => {
          console.log("Correto");
        },
        error => { console.log("Erro ${error}"); });
  }
}
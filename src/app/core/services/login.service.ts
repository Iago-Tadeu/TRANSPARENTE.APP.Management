import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { LoginModel } from "../models/login-model";

@Injectable({
    providedIn: "root"
})
export class LoginService {
    constructor(private httpClient: HttpClient) { }

    private readonly baseUrl = environment["endPoint"];
    loginUser(object: LoginModel) {
        return this.httpClient.post<string>("${this.baseUrl}/apiName42/", object);
    }
}
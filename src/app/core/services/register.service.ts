import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { UserModel } from "../models/user-model";

@Injectable({
    providedIn: "root"
})
export class RegisterService {
    constructor(private httpClient: HttpClient) { }

    private readonly baseUrl = environment["endPoint"];
    loginUser(object: UserModel) {
        return this.httpClient.post<any>("${this.baseUrl}/apiName42/", JSON.stringify(object));
        // this.httpClient.post('http://192.168.18.20:5000/api/auth/register', JSON.stringify(customer), this._global.httpOptions).subscribe((user);
    }
}
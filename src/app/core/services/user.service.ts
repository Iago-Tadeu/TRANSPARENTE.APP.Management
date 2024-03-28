import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AppGlobals } from '../../app.globals';
import { environment } from '../../../environments/environment';
import { UserModel } from '../models/user-model';



@Injectable({ providedIn: 'root' })
export class UserService {

    private baseAPIUrl = environment.baseAPIUrl;
    //   private path: string;

    constructor(private httpClient: HttpClient, private _global: AppGlobals) {
    }

    public getCurrentUser(): Promise<UserModel> {
        return new Promise((resolve, reject) => {
            this.httpClient.get(`${this.baseAPIUrl}/getDetails`)
                .subscribe((result: UserModel) => {
                    resolve(result);
                },
                    (error) => {
                        reject(error);
                    });
        });
    }

    public setNewPass(oldPass: string, newPass: string, newPass_c: string, currentUser: UserModel) {
        const params = {
            oldPass: oldPass,
            newPass: newPass,
            newPass_confirmation: newPass_c,
        };
        return this.httpClient.post(`${this.baseAPIUrl}/user/updatePass`,
            params, this._global.httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    public updateUser(currentUser: UserModel, name: string, email: string, phoneNumber: string, birthDate: string) {
        const params = {
            name: name,
            email: email,
            birthDate: birthDate,
            phoneNumber: phoneNumber
        };
        return this.httpClient.post(`${this.baseAPIUrl}/user/update`,
            params, this._global.httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    }
}

import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppGlobals {
    readonly httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
            // "Accept": "application"
            // "Access-Control-Allow-Origin": '*'
        })
    }
}

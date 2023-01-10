import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { first, Observable } from "rxjs";

@Injectable()
export class ApiService {
    constructor(
        private _http: HttpClient,
    ) {
    }


    public getPosts(): Observable<any> {
        return this._http.get(`https://jsonplaceholder.typicode.com/posts`).pipe(
            first()
        )
    }
}


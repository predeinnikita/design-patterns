import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { defer, ignoreElements, last, map, Observable, startWith, tap } from "rxjs";
import { PerfMetricaService } from "./perf-metrica.service";

@Injectable()
export class ApiService {
    constructor(
        private _http: HttpClient,
        private _perfMetrica: PerfMetricaService
    ) {
    }


    public getPosts(): Observable<any> {
        return this._http.get(`https://jsonplaceholder.typicode.com/posts`).pipe(
        )
    }
}


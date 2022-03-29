import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import Taxi from "../Taxi";
import { Guid } from "guid-typescript";

@Injectable()
export default class TaxiService {
    public API = 'http://localhost:8080/api';
    public TAXI_API = this.API + '/taxis';

    constructor(private http: HttpClient) {}

    getAll(): Observable<Array<Taxi>> {
        return this.http.get<Array<Taxi>>(this.TAXI_API);
    }

    get(id: string) {
        return this.http.get(this.TAXI_API + `/${id}`);
    }

    save(taxi: Taxi) : Observable<Taxi> {
        let result: Observable<Taxi>;
        if (taxi.id) {
            result = this.http.put<Taxi>(this.TAXI_API + `/${taxi.id}`, taxi);
        } else {
            result = this.http.post<Taxi>(this.TAXI_API, taxi);
        }
        return result;
    }

    remove(id: Guid) {
        return this.http.delete(this.TAXI_API + `/${id.toString()}`);
    }
}
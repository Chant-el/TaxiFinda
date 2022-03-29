import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Taxi from '../Taxi';

@Injectable({
  providedIn: 'root'
})
export class FindtaxiService {


  public API = 'http://localhost:8080/destination'
  taxis!: Array<Taxi>;

  constructor(private http: HttpClient) { }

  async getTaxisToDestination(destination: string) : Promise<Taxi[]> {
    
    await this.http.get<Array<Taxi>>(this.API + `/${destination}`).subscribe(
      data => {
        this.taxis = data;
        console.log(this.taxis);
      }
    );
    return this.taxis;
  }

  getTaxis() : Array<Taxi> {
    return this.taxis;
  }
}
  


import { Component, OnInit } from '@angular/core';
import TaxiService from '../shared/api/taxi.service';
import Taxi from '../shared/Taxi';

@Component({
  selector: 'app-taxi-list',
  templateUrl: './taxi-list.component.html',
  styleUrls: ['./taxi-list.component.scss']
})
export class TaxiListComponent implements OnInit {

  constructor(private taxiService: TaxiService) { }

  taxis: Array<Taxi> = [];

  // TaxisList:any=[];
  ngOnInit(): void {
    // this.fetchFromApi();
    this.taxiService.getAll().subscribe(data =>
      {
        this.taxis = data;
      });
  }

}

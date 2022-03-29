import { Component, OnInit } from '@angular/core';
import { FindtaxiService } from '../shared/api/findtaxi.service';
import Taxi from '../shared/Taxi';

@Component({
  selector: 'app-find-rank',
  templateUrl: './find-rank.component.html',
  styleUrls: ['./find-rank.component.scss']
})
export class FindRankComponent implements OnInit {

  constructor(private findTaxiService: FindtaxiService) { }

  taxis: Array<Taxi> = [];

  ngOnInit(): void {

    this.taxis = this.findTaxiService.getTaxis();
    console.log(this.taxis);
  }

}

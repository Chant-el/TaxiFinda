import { Component, OnInit } from '@angular/core';
import { FormArray, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FindtaxiService } from '../shared/api/findtaxi.service';


@Component({
  selector: 'app-find-taxi',
  templateUrl: './find-taxi.component.html',
  styleUrls: ['./find-taxi.component.scss']
})
export class FindTaxiComponent implements OnInit {
  userLocation: any;
  userDestination: any;

  constructor(private router: Router, private destinationService: FindtaxiService) { }

  goToPage(pageName: string):void {
    this.router.navigate([`${pageName}`]);
  }

  onSubmit(form: NgForm) {

    this.destinationService.getTaxisToDestination(this.userDestination);
    this.goToPage("find-rank");
  }

  ngOnInit(): void {
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import TaxiService from '../shared/api/taxi.service';
import Taxi from '../shared/Taxi';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-taxi-edit',
  templateUrl: './taxi-edit.component.html',
  styleUrls: ['./taxi-edit.component.scss']
})
export class TaxiEditComponent implements OnInit {
  taxi: Taxi = new Taxi();

  sub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taxiService: TaxiService
  ) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params =>
      {
        const id = params['id'];
        if (id) {
          this.taxiService.get(id).subscribe((taxi:any) => {
            if (taxi) {
              this.taxi = taxi;
            } else {
              console.log(
                'Taxi with id ${id} not found, returning to list'
              );
              this.gotoList();
            }
          });
        }
      })
  }

  gotoList() {
    this.router.navigate(['/taxi-list']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  save(form: any) {
    this.taxiService.save(form).subscribe(
      result => {
        this.gotoList();
      },
      error => console.error(error)
    );
  }

  remove(id: Guid) {
    this.taxiService.remove(id).subscribe(
      result => {
        this.gotoList();
      },
      error => console.error(error)
    );
  }

}

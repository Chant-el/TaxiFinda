import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTaxiComponent } from './find-taxi.component';

describe('FindTaxiComponent', () => {
  let component: FindTaxiComponent;
  let fixture: ComponentFixture<FindTaxiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindTaxiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindTaxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

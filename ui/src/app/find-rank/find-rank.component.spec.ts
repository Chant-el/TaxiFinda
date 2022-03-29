import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindRankComponent } from './find-rank.component';

describe('FindRankComponent', () => {
  let component: FindRankComponent;
  let fixture: ComponentFixture<FindRankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindRankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnapprovedReviewsComponent } from './unapproved-reviews.component';

describe('UnapprovedReviewsComponent', () => {
  let component: UnapprovedReviewsComponent;
  let fixture: ComponentFixture<UnapprovedReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnapprovedReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnapprovedReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

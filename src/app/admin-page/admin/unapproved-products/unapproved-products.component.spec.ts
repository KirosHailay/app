import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnapprovedProductsComponent } from './unapproved-products.component';

describe('UnapprovedProductsComponent', () => {
  let component: UnapprovedProductsComponent;
  let fixture: ComponentFixture<UnapprovedProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnapprovedProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnapprovedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

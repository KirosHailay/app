import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerProdDetailComponent } from './buyer-prod-detail.component';

describe('BuyerProdDetailComponent', () => {
  let component: BuyerProdDetailComponent;
  let fixture: ComponentFixture<BuyerProdDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerProdDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerProdDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

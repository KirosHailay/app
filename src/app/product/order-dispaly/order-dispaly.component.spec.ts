import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDispalyComponent } from './order-dispaly.component';

describe('OrderDispalyComponent', () => {
  let component: OrderDispalyComponent;
  let fixture: ComponentFixture<OrderDispalyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDispalyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDispalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertPaymentComponent } from './insert-payment.component';

describe('InsertPaymentComponent', () => {
  let component: InsertPaymentComponent;
  let fixture: ComponentFixture<InsertPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

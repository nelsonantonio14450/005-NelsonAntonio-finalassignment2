import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortDateComponent } from './sort-date.component';

describe('SortDateComponent', () => {
  let component: SortDateComponent;
  let fixture: ComponentFixture<SortDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BUSComponent } from './bus.component';

describe('BUSComponent', () => {
  let component: BUSComponent;
  let fixture: ComponentFixture<BUSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BUSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BUSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Izq15Component } from './izq15.component';

describe('Izq15Component', () => {
  let component: Izq15Component;
  let fixture: ComponentFixture<Izq15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Izq15Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Izq15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

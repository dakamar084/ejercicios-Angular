import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Der15Component } from './der15.component';

describe('Der15Component', () => {
  let component: Der15Component;
  let fixture: ComponentFixture<Der15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Der15Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Der15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

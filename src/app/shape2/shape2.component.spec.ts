import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shape2Component } from './shape2.component';

describe('Shape2Component', () => {
  let component: Shape2Component;
  let fixture: ComponentFixture<Shape2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Shape2Component]
    });
    fixture = TestBed.createComponent(Shape2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

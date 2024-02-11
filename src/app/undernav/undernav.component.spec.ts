import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndernavComponent } from './undernav.component';

describe('UndernavComponent', () => {
  let component: UndernavComponent;
  let fixture: ComponentFixture<UndernavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UndernavComponent]
    });
    fixture = TestBed.createComponent(UndernavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

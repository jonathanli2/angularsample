import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcmp1Component } from './subcmp1.component';

describe('Subcmp1Component', () => {
  let component: Subcmp1Component;
  let fixture: ComponentFixture<Subcmp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subcmp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subcmp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

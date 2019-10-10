import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcmp2Component } from './subcmp2.component';

describe('Subcmp2Component', () => {
  let component: Subcmp2Component;
  let fixture: ComponentFixture<Subcmp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subcmp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subcmp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

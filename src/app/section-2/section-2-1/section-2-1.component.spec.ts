import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Section21Component } from './section-2-1.component';

describe('Section21Component', () => {
  let component: Section21Component;
  let fixture: ComponentFixture<Section21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Section21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Section21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

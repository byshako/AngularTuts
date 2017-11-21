import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Section2Component } from './section-2.component';

describe('Section2Component', () => {
  let component: Section2Component;
  let fixture: ComponentFixture<Section2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Section2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Section2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

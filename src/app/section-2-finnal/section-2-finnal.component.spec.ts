import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Section2FinnalComponent } from './section-2-finnal.component';

describe('Section2FinnalComponent', () => {
  let component: Section2FinnalComponent;
  let fixture: ComponentFixture<Section2FinnalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Section2FinnalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Section2FinnalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

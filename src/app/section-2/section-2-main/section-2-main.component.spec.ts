import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Section2MainComponent } from './section-2-main.component';

describe('Section2MainComponent', () => {
  let component: Section2MainComponent;
  let fixture: ComponentFixture<Section2MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Section2MainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Section2MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

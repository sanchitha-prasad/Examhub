import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlevelComponent } from './olevel.component';

describe('OlevelComponent', () => {
  let component: OlevelComponent;
  let fixture: ComponentFixture<OlevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

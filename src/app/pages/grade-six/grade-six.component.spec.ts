import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeSixComponent } from './grade-six.component';

describe('GradeSixComponent', () => {
  let component: GradeSixComponent;
  let fixture: ComponentFixture<GradeSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

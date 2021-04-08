import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionboardComponent } from './decisionboard.component';

describe('DecisionboardComponent', () => {
  let component: DecisionboardComponent;
  let fixture: ComponentFixture<DecisionboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecisionboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecisionboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

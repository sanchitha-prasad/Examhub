import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecistonboardwrongComponent } from './decistonboardwrong.component';

describe('DecistonboardwrongComponent', () => {
  let component: DecistonboardwrongComponent;
  let fixture: ComponentFixture<DecistonboardwrongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecistonboardwrongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecistonboardwrongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

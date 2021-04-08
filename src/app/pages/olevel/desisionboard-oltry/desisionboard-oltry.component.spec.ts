import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesisionboardOltryComponent } from './desisionboard-oltry.component';

describe('DesisionboardOltryComponent', () => {
  let component: DesisionboardOltryComponent;
  let fixture: ComponentFixture<DesisionboardOltryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesisionboardOltryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesisionboardOltryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

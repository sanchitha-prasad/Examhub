import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesisionboardOlComponent } from './desisionboard-ol.component';

describe('DesisionboardOlComponent', () => {
  let component: DesisionboardOlComponent;
  let fixture: ComponentFixture<DesisionboardOlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesisionboardOlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesisionboardOlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

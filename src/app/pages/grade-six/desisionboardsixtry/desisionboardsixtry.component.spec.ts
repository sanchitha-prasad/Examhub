import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesisionboardsixtryComponent } from './desisionboardsixtry.component';

describe('DesisionboardsixtryComponent', () => {
  let component: DesisionboardsixtryComponent;
  let fixture: ComponentFixture<DesisionboardsixtryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesisionboardsixtryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesisionboardsixtryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

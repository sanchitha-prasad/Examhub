import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatictisComponent } from './statictis.component';

describe('StatictisComponent', () => {
  let component: StatictisComponent;
  let fixture: ComponentFixture<StatictisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatictisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatictisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesisionboardsixComponent } from './desisionboardsix.component';

describe('DesisionboardsixComponent', () => {
  let component: DesisionboardsixComponent;
  let fixture: ComponentFixture<DesisionboardsixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesisionboardsixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesisionboardsixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

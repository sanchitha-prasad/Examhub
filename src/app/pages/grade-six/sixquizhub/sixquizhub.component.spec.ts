import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixquizhubComponent } from './sixquizhub.component';

describe('SixquizhubComponent', () => {
  let component: SixquizhubComponent;
  let fixture: ComponentFixture<SixquizhubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixquizhubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SixquizhubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlquizhubComponent } from './alquizhub.component';

describe('AlquizhubComponent', () => {
  let component: AlquizhubComponent;
  let fixture: ComponentFixture<AlquizhubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlquizhubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlquizhubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlquizhubComponent } from './olquizhub.component';

describe('OlquizhubComponent', () => {
  let component: OlquizhubComponent;
  let fixture: ComponentFixture<OlquizhubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlquizhubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlquizhubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

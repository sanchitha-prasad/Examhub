import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeryfiCodeComponent } from './veryfi-code.component';

describe('VeryfiCodeComponent', () => {
  let component: VeryfiCodeComponent;
  let fixture: ComponentFixture<VeryfiCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeryfiCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeryfiCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

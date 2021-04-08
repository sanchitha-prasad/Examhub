import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrograssComponent } from './prograss.component';

describe('PrograssComponent', () => {
  let component: PrograssComponent;
  let fixture: ComponentFixture<PrograssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrograssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrograssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

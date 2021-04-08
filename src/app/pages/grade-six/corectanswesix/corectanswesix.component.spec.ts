import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorectanswesixComponent } from './corectanswesix.component';

describe('CorectanswesixComponent', () => {
  let component: CorectanswesixComponent;
  let fixture: ComponentFixture<CorectanswesixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorectanswesixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorectanswesixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

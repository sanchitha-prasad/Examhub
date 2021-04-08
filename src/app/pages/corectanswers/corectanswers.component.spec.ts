import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorectanswersComponent } from './corectanswers.component';

describe('CorectanswersComponent', () => {
  let component: CorectanswersComponent;
  let fixture: ComponentFixture<CorectanswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorectanswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorectanswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

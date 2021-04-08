import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorectanswerOlComponent } from './corectanswer-ol.component';

describe('CorectanswerOlComponent', () => {
  let component: CorectanswerOlComponent;
  let fixture: ComponentFixture<CorectanswerOlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorectanswerOlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorectanswerOlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

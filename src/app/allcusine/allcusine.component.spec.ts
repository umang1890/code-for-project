import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcusineComponent } from './allcusine.component';

describe('AllcusineComponent', () => {
  let component: AllcusineComponent;
  let fixture: ComponentFixture<AllcusineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllcusineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcusineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

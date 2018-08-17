import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecusineComponent } from './updatecusine.component';

describe('UpdatecusineComponent', () => {
  let component: UpdatecusineComponent;
  let fixture: ComponentFixture<UpdatecusineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatecusineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecusineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

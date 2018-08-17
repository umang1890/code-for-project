import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiddemoComponent } from './validdemo.component';

describe('ValiddemoComponent', () => {
  let component: ValiddemoComponent;
  let fixture: ComponentFixture<ValiddemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValiddemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValiddemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

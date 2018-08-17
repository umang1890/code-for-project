import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedishComponent } from './updatedish.component';

describe('UpdatedishComponent', () => {
  let component: UpdatedishComponent;
  let fixture: ComponentFixture<UpdatedishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

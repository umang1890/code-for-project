import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareditcardComponent } from './careditcard.component';

describe('CareditcardComponent', () => {
  let component: CareditcardComponent;
  let fixture: ComponentFixture<CareditcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareditcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareditcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

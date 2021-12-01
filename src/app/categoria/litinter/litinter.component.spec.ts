import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitinterComponent } from './litinter.component';

describe('LitinterComponent', () => {
  let component: LitinterComponent;
  let fixture: ComponentFixture<LitinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LitinterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LitinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

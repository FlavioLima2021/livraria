import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitbraComponent } from './litbra.component';

describe('LitbraComponent', () => {
  let component: LitbraComponent;
  let fixture: ComponentFixture<LitbraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LitbraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LitbraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

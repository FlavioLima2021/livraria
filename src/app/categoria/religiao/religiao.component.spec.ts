import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReligiaoComponent } from './religiao.component';

describe('ReligiaoComponent', () => {
  let component: ReligiaoComponent;
  let fixture: ComponentFixture<ReligiaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReligiaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReligiaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

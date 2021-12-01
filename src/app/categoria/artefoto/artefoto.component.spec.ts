import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtefotoComponent } from './artefoto.component';

describe('ArtefotoComponent', () => {
  let component: ArtefotoComponent;
  let fixture: ComponentFixture<ArtefotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtefotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtefotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

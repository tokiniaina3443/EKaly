import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituationRestauComponent } from './situation-restau.component';

describe('SituationRestauComponent', () => {
  let component: SituationRestauComponent;
  let fixture: ComponentFixture<SituationRestauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SituationRestauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SituationRestauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

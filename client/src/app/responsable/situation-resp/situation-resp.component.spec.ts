import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituationRespComponent } from './situation-resp.component';

describe('SituationRespComponent', () => {
  let component: SituationRespComponent;
  let fixture: ComponentFixture<SituationRespComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SituationRespComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SituationRespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

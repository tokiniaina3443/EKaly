import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionRespComponent } from './gestion-resp.component';

describe('GestionRespComponent', () => {
  let component: GestionRespComponent;
  let fixture: ComponentFixture<GestionRespComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionRespComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionRespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

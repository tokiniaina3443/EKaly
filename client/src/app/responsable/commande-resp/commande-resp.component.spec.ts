import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeRespComponent } from './commande-resp.component';

describe('CommandeRespComponent', () => {
  let component: CommandeRespComponent;
  let fixture: ComponentFixture<CommandeRespComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeRespComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeRespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeRestauComponent } from './commande-restau.component';

describe('CommandeRestauComponent', () => {
  let component: CommandeRestauComponent;
  let fixture: ComponentFixture<CommandeRestauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeRestauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeRestauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

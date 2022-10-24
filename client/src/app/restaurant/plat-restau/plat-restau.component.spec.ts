import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatRestauComponent } from './plat-restau.component';

describe('PlatRestauComponent', () => {
  let component: PlatRestauComponent;
  let fixture: ComponentFixture<PlatRestauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatRestauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatRestauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

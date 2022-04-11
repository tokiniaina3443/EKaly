import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandAdminComponent } from './command-admin.component';

describe('CommandAdminComponent', () => {
  let component: CommandAdminComponent;
  let fixture: ComponentFixture<CommandAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

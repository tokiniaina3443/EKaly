import { TestBed } from '@angular/core/testing';

import { CommandemereService } from './commandemere.service';

describe('CommandemereService', () => {
  let service: CommandemereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandemereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

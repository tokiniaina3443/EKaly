import { TestBed } from '@angular/core/testing';

import { InfocommandeService } from './infocommande.service';

describe('InfocommandeService', () => {
  let service: InfocommandeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfocommandeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

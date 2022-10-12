import { TestBed } from '@angular/core/testing';

import { SuperviseurService } from './superviseur.service';

describe('SuperviseurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuperviseurService = TestBed.get(SuperviseurService);
    expect(service).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PersonaServiceService } from './personaService.service';

describe('Service: PersonaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonaServiceService]
    });
  });

  it('should ...', inject([PersonaServiceService], (service: PersonaServiceService) => {
    expect(service).toBeTruthy();
  }));
});

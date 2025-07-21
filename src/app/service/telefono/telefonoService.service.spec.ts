/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TelefonoServiceService } from './telefonoService.service';

describe('Service: TelefonoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TelefonoServiceService]
    });
  });

  it('should ...', inject([TelefonoServiceService], (service: TelefonoServiceService) => {
    expect(service).toBeTruthy();
  }));
});

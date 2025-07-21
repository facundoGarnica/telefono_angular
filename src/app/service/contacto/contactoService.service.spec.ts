/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContactoServiceService } from './contactoService.service';

describe('Service: ContactoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactoServiceService]
    });
  });

  it('should ...', inject([ContactoServiceService], (service: ContactoServiceService) => {
    expect(service).toBeTruthy();
  }));
});

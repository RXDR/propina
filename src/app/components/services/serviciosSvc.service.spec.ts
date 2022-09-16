/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiciosSvcService } from './serviciosSvc.service';

describe('Service: ServiciosSvc', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiciosSvcService]
    });
  });

  it('should ...', inject([ServiciosSvcService], (service: ServiciosSvcService) => {
    expect(service).toBeTruthy();
  }));
});

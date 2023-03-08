/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OwnersService } from './owners.service';

describe('Service: Owners', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OwnersService]
    });
  });

  it('should ...', inject([OwnersService], (service: OwnersService) => {
    expect(service).toBeTruthy();
  }));
});

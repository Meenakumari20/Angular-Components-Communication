import { TestBed, inject } from '@angular/core/testing';

import { CommunicationService } from './communication.service';

describe('CommunicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommunicationService]
    });
  });

  it('should be created', inject([CommunicationService], (service: CommunicationService) => {
    expect(service).toBeTruthy();
  }));
});

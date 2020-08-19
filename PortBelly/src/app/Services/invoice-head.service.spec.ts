import { TestBed } from '@angular/core/testing';

import { InvoiceHeadService } from './invoice-head.service';

describe('InvoiceHeadService', () => {
  let service: InvoiceHeadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoiceHeadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

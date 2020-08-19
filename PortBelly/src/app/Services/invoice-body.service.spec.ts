import { TestBed } from '@angular/core/testing';

import { InvoiceBodyService } from './invoice-body.service';

describe('InvoiceBodyService', () => {
  let service: InvoiceBodyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoiceBodyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

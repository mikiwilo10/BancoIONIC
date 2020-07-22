import { TestBed } from '@angular/core/testing';

import { JavaserviceService } from './javaservice.service';

describe('JavaserviceService', () => {
  let service: JavaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JavaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

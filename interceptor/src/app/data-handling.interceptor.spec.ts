import { TestBed } from '@angular/core/testing';

import { DataHandlingInterceptor } from './data-handling.interceptor';

describe('DataHandlingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      DataHandlingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: DataHandlingInterceptor = TestBed.inject(DataHandlingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

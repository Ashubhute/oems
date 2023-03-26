import { TestBed } from '@angular/core/testing';

import { AuthInterCeptorInterceptor } from './auth-inter-ceptor.interceptor';

describe('AuthInterCeptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthInterCeptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthInterCeptorInterceptor = TestBed.inject(AuthInterCeptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

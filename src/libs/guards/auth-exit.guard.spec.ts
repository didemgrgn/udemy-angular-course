import { TestBed } from '@angular/core/testing';

import { AuthExitGuard } from './auth-exit.guard';

describe('AuthExitGuard', () => {
  let guard: AuthExitGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthExitGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

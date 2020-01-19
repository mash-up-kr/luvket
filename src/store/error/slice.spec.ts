import HttpErrorResponse from '@/models/HttpErrorResponse';

import reducer, { initialState } from './slice';

describe('error reducer', () => {
  it('should handle `Failure` action type', () => {
    expect(reducer(initialState, { type: 'auth/loginFailure', payload: new HttpErrorResponse() })).toEqual({
      'auth/login': new HttpErrorResponse(),
    });
  });

  it('should handle `Request` action type', () => {
    expect(
      reducer(
        { 'auth/login': new HttpErrorResponse() },
        { type: 'auth/loginRequest', payload: new HttpErrorResponse() },
      ),
    ).toEqual({});
  });
});

import reducer, { initialState } from './slice';

describe('requesting reducer', () => {
  it('should handle initial state', () => {
    expect(reducer(undefined, { type: '' })).toEqual({});
  });

  it('should handle `Request` action type', () => {
    expect(reducer(initialState, { type: 'auth/loginRequest' })).toEqual({
      'auth/login': true,
    });

    expect(reducer({ 'auth/login': true }, { type: 'auth/logoutRequest' })).toEqual({
      'auth/login': true,
      'auth/logout': true,
    });
  });

  it('should handle `Success` action type', () => {
    expect(reducer(initialState, { type: 'auth/loginSuccess' })).toEqual({
      'auth/login': false,
    });

    expect(reducer({ 'auth/login': true }, { type: 'auth/logoutSuccess' })).toEqual({
      'auth/login': true,
      'auth/logout': false,
    });
  });

  it('should handle `Failure` action type', () => {
    expect(reducer(initialState, { type: 'auth/loginFailure' })).toEqual({
      'auth/login': false,
    });

    expect(reducer({ 'auth/login': true }, { type: 'auth/logoutFailure' })).toEqual({
      'auth/login': true,
      'auth/logout': false,
    });
  });
});

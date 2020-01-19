import { createRequestingSelector } from './selectors';

describe('requesting selectors', () => {
  it('should be `true` if at least one is requesting', () => {
    const state = {
      requesting: {
        'auth/login': true,
        'post/fetchPosts': true,
        'user/fetchUser': true,
      },
    };
    const actionTypes = ['auth/loginRequest', 'post/fetchPostsRequest', 'user/fetchUserRequest'];

    expect(createRequestingSelector(actionTypes)(state)).toEqual(true);

    state.requesting['auth/login'] = false;

    expect(createRequestingSelector(actionTypes)(state)).toEqual(true);

    state.requesting['post/fetchPosts'] = false;

    expect(createRequestingSelector(actionTypes)(state)).toEqual(true);
  });

  it('should be `false` if nothing is requesting', () => {
    const state = {
      requesting: {
        'auth/login': false,
        'post/fetchPosts': false,
        'user/fetchUser': false,
      },
    };
    const actionTypes = ['auth/loginRequest', 'post/fetchPostsRequest', 'user/fetchUserRequest'];

    expect(createRequestingSelector(actionTypes)(state)).toEqual(false);
  });
});

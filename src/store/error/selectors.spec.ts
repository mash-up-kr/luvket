import HttpErrorResponse from '@/models/HttpErrorResponse';

import { createErrorSelector } from './selectors';

describe('error selectors', () => {
  it('should be first error value if there are multiple errors', () => {
    const state = {
      error: {
        'auth/login': new HttpErrorResponse(),
        'post/fetchPosts': new HttpErrorResponse(),
        'user/fetchUser': new HttpErrorResponse(),
      },
    };
    const actionTypes = ['auth/loginFailure', 'post/fetchPostsFailure', 'user/fetchUserFailure'];

    expect(createErrorSelector(actionTypes)(state)).toEqual(state.error['auth/login']);
  });
});

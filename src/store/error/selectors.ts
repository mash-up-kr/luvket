import _ from 'lodash/fp';

import State from '@/models/State';

/**
 * 파라미터로 전달받은 action들에 대하여 에러가 발생한 부분이 있는지 확인하는 selector를 생성한다.
 * @param actionTypes 에러 발생 여부를 확인할 비동기 액션 타입 목록
 * @returns 에러가 발생한 비동기 요청 중 첫 번째 에러를 반환하는 selector
 * ```ts
 * const actionTypes: string[] = [loginRequest.type, fetchPosts.type, fetchUser.type];
 * const error: boolean = useSelector(crateErrorSelector(actionTypes));
 *
 * return error ? <ErrorMessage>{error.message}</ErrorMessage> : <h1>Hello, World!</h1>
 * ```
 */
const createErrorSelector = (actionTypes: string[]): Function => (state: State): string => {
  const names: string[] = _.compose(
    _.filter<string>(Boolean),
    _.map((actionType: string): string => {
      const matches = /(.*)(Request|Success|Failure)/.exec(actionType);

      if (!matches) return '';

      const [, actionName] = matches;

      return actionName;
    }),
  )(actionTypes);

  return _.compose(
    _.first,
    _.compact,
    _.map((name: string) => state.error[name]),
  )(names);
};

export { createErrorSelector };

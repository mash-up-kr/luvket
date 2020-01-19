import _ from 'lodash/fp';

import State from '@/models/State';

/**
 * 파라미터로 전달받은 action들에 대하여 진행 중인 요청이 있는지 확인하는 selector를 생성한다.
 * @param actionTypes 진행 중인 요청을 확인할 비동기 액션 타입 목록
 * @returns 진행 중인 요청이 있는지 확인하는 selector
 * ```ts
 * const actionTypes: string[] = [loginRequest.type, fetchPosts.type, fetchUser.type];
 * const loading: boolean = useSelector(crateRequestingSelector(actionTypes));
 *
 * return loading ? <Spinner /> : <h1>Hello, World!</h1>
 * ```
 */
const createRequestingSelector = (actionTypes: string[]): Function => (state: State): boolean => {
  const names: string[] = _.compose(
    _.filter<string>(Boolean),
    _.map((actionType: string): string => {
      const matches = /(.*)(Request|Success|Failure)/.exec(actionType);

      if (!matches) return '';

      const [, actionName] = matches;

      return actionName;
    }),
  )(actionTypes);

  return _.some((name: string): boolean => state.requesting[name], names);
};

export { createRequestingSelector };

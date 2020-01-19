import { RouterState } from 'connected-react-router';

import { RequestingState } from '@/store/requesting/models';

export default interface State {
  readonly requesting: RequestingState;
  readonly router: RouterState;
}

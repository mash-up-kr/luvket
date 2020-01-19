import { RouterState } from 'connected-react-router';

import { ErrorState } from '@/store/error/models';
import { RequestingState } from '@/store/requesting/models';

export default interface State {
  readonly error: ErrorState;
  readonly requesting: RequestingState;
  readonly router: RouterState;
}

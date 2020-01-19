import Error from '@/models/Error';

export interface ErrorState {
  readonly [key: string]: Error;
}

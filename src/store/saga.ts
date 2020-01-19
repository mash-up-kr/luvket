import _ from 'lodash/fp';
import { all, AllEffect, CallEffect, fork, ForkEffect } from 'redux-saga/effects';

const sagas = {};

function* saga(): Generator<AllEffect<ForkEffect<unknown>> | CallEffect<unknown>, void, unknown> {
  try {
    yield all(_.map(fork, sagas));
  } catch (error) {
    // eslint-disable-next-line
    console.error(error);
  }
}

export default saga;

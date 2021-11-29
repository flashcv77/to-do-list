import { runSaga } from 'redux-saga';
import { takeLatest, call, put } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import { deepEqual } from 'assert';
import * as api from '../../../../api/books';

import {
  booksFetchErrorAction,
  booksFetchInProgressAction,
  booksFetchSuccessAction,
} from '../../actions/books.actions';

import { getBooksSaga, watcherGetBooksSaga } from '../booksSagas';

describe('geBooksSaga', () => {
  it('should call api and dispatch success action', async () => {
    const dummyBook = [{ name: 'tests' }];
    const requestBooks = jest
      .spyOn(api, 'getBooks')
      .mockImplementation(() => Promise.resolve(dummyBook));
    const dispatched = [];
    // const result =
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      getBooksSaga,
    );
    expect(requestBooks).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([
      booksFetchInProgressAction(),
      booksFetchSuccessAction(dummyBook),
    ]);
    requestBooks.mockClear();
  });

  it('should call api and dispatch error action', async () => {
    const requestBooks = jest
      .spyOn(api, 'getBooks')
      .mockImplementation(() => Promise.reject());
    const dispatched = [];
    // const result =
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      getBooksSaga,
    );
    expect(requestBooks).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([
      booksFetchInProgressAction(),
      booksFetchErrorAction(),
    ]);
    requestBooks.mockClear();
  });
});

describe('watcherGetBooksSaga', () => {
  const genObject = watcherGetBooksSaga();

  it('should wait for every START action and call getBookssSaga', () => {
    expect(genObject.next().value).toEqual(
      takeLatest('BOOKS_FETCH_START', getBooksSaga),
    );
  });
  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe('Saga test', () => {
  const generator = cloneableGenerator(getBooksSaga)();
  test('Positive Saga call test', () => {
    const clone = generator.clone();
    expect(clone.next().value).toEqual(put(booksFetchInProgressAction()));

    deepEqual(
      clone.next().value,
      call(api.getBooks),
      'should call getBooks fetch',
    );
    deepEqual(
      clone.next().value,
      put(booksFetchSuccessAction()),
      'should add Success action',
    );
    const result = clone.next().done;
    deepEqual(
      result,
      true,
      'should be done',
    );
  });
  test('Negative Saga call test', () => {
    const clone = generator.clone();
    deepEqual(
      clone.next().value,
      put(booksFetchInProgressAction()),
      'should add inProgress action first',
    );
    deepEqual(
      clone.throw().value,
      put(booksFetchErrorAction()),
      'should add Error action on error',
    );
  });
});

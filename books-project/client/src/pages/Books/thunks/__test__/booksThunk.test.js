/* eslint-disable no-undef */
import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import { getBooksThunk } from '../booksThunk';
import { client } from '../../../../api/client';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const initialState = {
  data: [],
  loading: false,
};

describe('Test book Actions', () => {
  let store;
  beforeEach(() => {
    moxios.install(client);
    store = mockStore(initialState);
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('Loads all books correctly', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          data: [
            {
              uuid: '21b83107-a4e6-4a8b-827c-244a0109f093',
              name: 'string',
              author: 'string',
              description: 'string',
              createDate: '2021-11-26T09:55:35.336Z',
            }],
        },
      });
    });

    const expectedActions = [
      {
        type: 'BOOKS_FETCH_IN_PROGRESS',
      },
      {
        payload: [
          {
            uuid: '21b83107-a4e6-4a8b-827c-244a0109f093',
            name: 'string',
            author: 'string',
            description: 'string',
            createDate: '2021-11-26T09:55:35.336Z',
          }],

        type: 'BOOKS_FETCH_SUCCESS',
      },
    ];

    store.dispatch(getBooksThunk()).then(() => {
      const actualAction = store.getActions();
      expect(actualAction).toEqual(expectedActions);
      done();
    });
  });
});

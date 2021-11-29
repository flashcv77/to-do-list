/* eslint-disable no-undef */
import React from 'react';
import { cleanup } from '@testing-library/react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';

import { BookItem } from '../BookItem';

afterEach(cleanup);

global.matchMedia = global.matchMedia || function () {
  return {
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
};

let container = null;
const showModal = jest.fn();
const key = '1';
const id = '1';
const title = 'TitleTest';
const author = '1';
const date = '2021-11-26T09:55:28.780Z';
const description = 'DescriptionTest';

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders with or without a name', () => {
  act(() => {
    render(
      <Router>
        <BookItem
          key={key}
          id={id}
          title={title}
          author={author}
          date={date}
          description={description}
          showModal={showModal}
        />
      </Router>,
      container,
    );
  });
  expect(container.querySelector('.ant-card-meta-title').textContent).toBe('TitleTest');
  expect(container.querySelector('.ant-card-meta-description').textContent).toBe('DescriptionTest');
});

/* eslint-disable no-undef */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import { BookItem } from '../BookItem';

let container = null;
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
    const mockCallback = jest.fn();
    render(
      <Router>
        <BookItem
          key=""
          id=""
          title=""
          author=""
          date=""
          description=""
          showModal={mockCallback}
        />
      </Router>,
      container,
    );
  });
  expect(container.querySelector('ant-card-body').toBe(null));
});

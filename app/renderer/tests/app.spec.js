/* eslint-env jest */

import React from 'react';
import Renderer from 'react-test-renderer';

import App from '../pages/app';

function createNodeMock() {
  return { focus: () => {} };
}

test('page App', () => {
  const component = Renderer.create(
    <App />, { createNodeMock });
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
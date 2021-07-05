import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import ProductsList from '../containers/ProductsList';
import store from '../reducers/store';

it('expect to render productList components', () => {
  const result = renderer.create(
    <Provider store={store}>
      <ProductsList />
    </Provider>,

  ).toJSON;
  expect(result).toMatchSnapshot();
});

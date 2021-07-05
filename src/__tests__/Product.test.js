import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Product from '../containers/ProductsList';
import store from '../reducers/store';

const defaultProduct = {
  id: 1,
  title: 'title',
  price: 25,
  category: 'CLOTHING',
};

it('expect id to be 1 ', () => {
  const result = defaultProduct;
  expect(result.id).toEqual(1);
});

it('expect price equal to price value ', () => {
  const result = defaultProduct;
  expect(result.price).toEqual(25);
});

it('expect category to equal category  value ', () => {
  const result = defaultProduct;
  expect(result.category).not.toEqual(1);
});
it('expect id not equal to price value ', () => {
  const result = defaultProduct;
  expect(result.category).toEqual('CLOTHING');
});
it('expect to render productList components', () => {
  const result = renderer.create(
    <Provider store={store}>
      <Product />
    </Provider>,

  ).toJSON;
  expect(result).toMatchSnapshot();
});

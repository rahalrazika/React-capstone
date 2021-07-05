import React from 'react';
import renderer from 'react-test-renderer';
import Loading from '../components/loading';

it('expect to render loading components', () => {
  const result = renderer.create(<Loading />).toJSON;
  expect(result).toMatchSnapshot();
});

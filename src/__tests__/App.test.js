import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import App from '../components/App';
import store from '../reducers/store';

it('Renders DetailPage component', () => {
  const page = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>,
  ).toJSON();
  expect(page).toMatchSnapshot();
});

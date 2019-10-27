import { createStore } from 'redux';
import reducer from './ducks';

interface MyWindow extends Window {
  // eslint-disable-next-line
  __REDUX_DEVTOOLS_EXTENSION__?: any;
}

const store = createStore(
  reducer,
  // eslint-disable-next-line
  (window as MyWindow).__REDUX_DEVTOOLS_EXTENSION__ &&
    // eslint-disable-next-line
    (window as MyWindow).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

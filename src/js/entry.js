import { createStore } from 'redux';
import reducers from './reducers';
import { INCREMENT } from './actions/types';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

const render = () => {
  document.body.innerText = store.getState().counter;
};

store.subscribe(render);
render();

document.addEventListener('click', () => {
  store.dispatch({ type: INCREMENT });
});

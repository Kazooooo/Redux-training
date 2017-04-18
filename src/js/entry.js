import { createStore } from 'redux';
import reducers from './reducers';
import { increment, decrement } from './actions';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

const render = () => {
  document.getElementById('counter').value = store.getState().counter;
};

store.subscribe(render);
render();

document.getElementById('increment').addEventListener('click', () => {
  store.dispatch(increment());
});

document.getElementById('decrement').addEventListener('click', () => {
  store.dispatch(decrement());
});

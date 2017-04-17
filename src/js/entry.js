import { createStore } from 'redux';
import reducers from './reducers';
import { INCREMENT } from './actions/types';

const store = createStore(reducers);

const render = () => {
  document.body.innerText = store.getState().counter;
};

store.subscribe(render);
render();

document.addEventListener('click', () => {
  store.dispatch({ type: INCREMENT });
});

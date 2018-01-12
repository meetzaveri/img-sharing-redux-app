import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Main from './containers/main';
import store from './store/store';

const render = () => {
    ReactDOM.render(<Main getitems={store.getState().items} />, document.getElementById('root'));
}

store.subscribe(render);
render();

console.log(store.getState().items);

registerServiceWorker();

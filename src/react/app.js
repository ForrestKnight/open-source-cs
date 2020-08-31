/* Packages */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css';


/* Local files */
import '../sass/main.scss';
import storeConfig from './redux/store/storeConfig';
import Router from './routers/Router';


/* Configure store */
const store = storeConfig();
store.subscribe(() => {
    // Anything put here happens on every state change
});


/* Launch App */
const $appRoot = document.querySelector('#app');
const jsx = (
    <Provider store={store} >
        <Router />
    </Provider>
);

ReactDOM.render(jsx, $appRoot);
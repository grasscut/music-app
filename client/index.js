import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './scss/main.scss';
import musicApp from './reducers';
import App from './containers/AppContainer';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore),
    store = createStoreWithMiddleware(musicApp);

ReactDOM.render(
    <Provider store={store}>
       <App />
    </Provider>,
    document.getElementById('musicAppRoot')
);
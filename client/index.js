import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { createHashHistory } from 'history';
import thunk from 'redux-thunk';
import './scss/main.scss';
import musicApp from './reducers';
import App from './containers/AppContainer';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore),
    store = createStoreWithMiddleware(musicApp),
    history = createHashHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path="/user/:accessToken/:refreshToken" component={App} />
                <Route path="/" component={App} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('musicAppRoot')
);
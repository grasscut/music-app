import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { createHashHistory } from 'history';
import thunk from 'redux-thunk';
import './scss/main.scss';
import musicApp from './reducers';
import Error from './components/Error';
import AppContainer from './containers/AppContainer';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore),
    store = createStoreWithMiddleware(musicApp),
    history = createHashHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path="/user/:accessToken/:refreshToken" component={AppContainer} />
                <Route path="/error" component={Error} />
                <Route path="/" component={AppContainer} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('musicAppRoot')
);
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './scss/main.scss';
import musicApp from './reducers';
import App from './containers/AppContainer';
import Error from "./components/Error";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore),
    store = createStoreWithMiddleware(musicApp);

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path="/error" component={Error} />
                <Route path="/" component={App} />
            </Switch>
        </HashRouter>
    </Provider>,
    document.getElementById('musicAppRoot')
);
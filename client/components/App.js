import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navigation from '../containers/NavigationContainer';
import TracksList from '../containers/TracksListContainer';
import LoginButton from './LoginButton';

class App extends Component {
    componentWillMount() {
        const { match, updateUserAuthentication } = this.props;

        updateUserAuthentication(match);
    }

    render() {
        const { loggedIn } = this.props;

        if (loggedIn) {
            return (
                <div className="musicApp">
                    <Navigation />
                    <BrowserRouter>
                        <Switch>
                            <Route path="/deleted" component={TracksList} />
                            <Route path="/" component={TracksList} />
                        </Switch>
                    </BrowserRouter>
                </div>
            );
        } else {
            return (
                <div className="musicApp musicApp--unauthorized">
                    <LoginButton/>
                </div>
            );
        }
    }
};

App.propTypes = {
    updateUserAuthentication: PropTypes.func.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    match: PropTypes.object
};

export default App;
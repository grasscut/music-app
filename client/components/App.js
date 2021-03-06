import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import cookie from 'react-cookie';
import Navigation from '../containers/NavigationContainer';
import TracksList from '../containers/TracksListContainer';
import DeletedTracksList from '../containers/DeletedTracksListContainer';
import PopularityPage from '../containers/PopularityPageContainer';
import LoginButton from './ui/LoginButton';

class App extends Component {
    constructor(props) {
        super(props);

        const accessToken = cookie.load('access_token');

        props.updateUserAuthentication(accessToken);
    }

    render() {
        const { loggedIn } = this.props;

        if (loggedIn) {
            return (
                <HashRouter>
                    <div className="musicApp">
                        <Navigation />
                        <Switch>
                            <Route path="/mainstream-o-meter" component={PopularityPage} />
                            <Route path="/saved_tracks" component={TracksList} />
                            <Route path="/deleted" component={DeletedTracksList} />
                            <Redirect from="/" to="/saved_tracks" />
                        </Switch>
                    </div>
                </HashRouter>
            );
        } else {
            return (
                <div className="musicApp musicApp--unauthorized">
                    <LoginButton/>
                </div>
            );
        }
    }
}

App.propTypes = {
    updateUserAuthentication: PropTypes.func.isRequired,
    loggedIn: PropTypes.bool.isRequired
};

export default App;
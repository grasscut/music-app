import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation';
import TracksList from '../containers/TracksList';
import LoginButton from './LoginButton';

class App extends Component {
    componentWillMount() {
        const { match, updateUserAuthentication } = this.props;

        updateUserAuthentication(match);
    }

    render() {
        const { loggedIn, user } = this.props;

        if (loggedIn) {
            return (
                <div className="musicApp">
                    <Navigation user={user} />
                    <TracksList />
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
}

App.propTypes = {
    match: PropTypes.object,
    user: PropTypes.object,
    loggedIn: PropTypes.bool.isRequired,
    updateUserAuthentication: PropTypes.func.isRequired,
    loadTracks: PropTypes.func.isRequired,
    tracks: PropTypes.array
};

export default App;
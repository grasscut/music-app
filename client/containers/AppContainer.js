import { connect } from 'react-redux';
import { authenticateUser } from '../actions/authentication';
import { loadTracks } from '../actions/tracks';
import App from '../components/App';

const mapStateToProps = state => {
    return {
        user: state.authentication.user,
        loggedIn: state.authentication.loggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateUserAuthentication: match => dispatch(authenticateUser(match)),
        loadTracks: () => dispatch(loadTracks)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
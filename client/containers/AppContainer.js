import { connect } from 'react-redux';
import { authenticateUser } from '../actions/authentication';
import App from '../components/App';

const mapStateToProps = state => {
    return {
        loggedIn: state.authentication.loggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateUserAuthentication: accessToken => dispatch(authenticateUser(accessToken))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
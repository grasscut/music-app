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
        updateUserAuthentication: match => dispatch(authenticateUser(match))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
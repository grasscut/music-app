import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Navigation from '../components/Navigation';

const mapStateToProps = state => {
    return {
        user: state.authentication.user
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        null
    )(Navigation)
);
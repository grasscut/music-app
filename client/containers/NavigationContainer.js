import { connect } from 'react-redux';
import Navigation from '../components/Navigation';

const mapStateToProps = state => {
    return {
        user: state.authentication.user
    };
};

export default connect(
    mapStateToProps,
    null
)(Navigation);
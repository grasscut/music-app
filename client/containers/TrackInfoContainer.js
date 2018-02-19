import { connect } from 'react-redux';
import { removeTrack } from '../actions/tracks';
import TrackInfo from '../components/TrackInfo';

const mapDispatchToProps = dispatch => {
    return {
        removeTrack: id => dispatch(removeTrack(id))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(TrackInfo);
import { connect } from 'react-redux';
import { deleteTrack } from '../actions/tracks';
import TrackInfo from '../components/all_tracks_list/TrackInfo';

const mapDispatchToProps = dispatch => {
    return {
        deleteTrack: id => dispatch(deleteTrack(id))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(TrackInfo);
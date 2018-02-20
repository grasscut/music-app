import React from 'react';
import { connect } from 'react-redux';
import { addTrack } from '../actions/tracks';
import DeletedTracksList from '../components/DeletedTracksList';

const mapStateToProps = state => {
    return {
        tracks: state.tracks.recentlyDeletedTracks
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addTrack: track => dispatch(addTrack(track))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeletedTracksList);
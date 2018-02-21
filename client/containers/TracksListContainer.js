import React from 'react';
import { connect } from 'react-redux';
import { loadTracks } from '../actions/tracks';
import TracksList from '../components/all_tracks_list/TracksList';

const mapStateToProps = state => {
    return {
        tracks: state.tracks.allTracks
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadTracks: () => dispatch(loadTracks)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TracksList);
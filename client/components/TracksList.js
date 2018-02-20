import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import Track from '../components/Track';

const TracksList = ({ tracks, loadTracks }) => {
    return (
        <InfiniteScroll
            className="musicApp__tracksList"
            pageStart={0}
            loadMore={loadTracks}
            hasMore = {true}>

            {tracks.map(track => <Track key={track.id} track={track} />)}
        </InfiniteScroll>
    );
};

TracksList.propTypes = {
    tracks: PropTypes.array.isRequired,
    loadTracks: PropTypes.func.isRequired
};

export default TracksList;
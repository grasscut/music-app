import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import Track from './Track';
import EmptyView from '../ui/EmptyView';

const TracksList = ({ tracks, loadTracks }) => {
    if (tracks.length) {
        return (
            <InfiniteScroll
                className="musicApp__tracksList"
                pageStart={0}
                loadMore={loadTracks}
                hasMore = {true}>
                {tracks.map(track => <Track key={track.id} track={track} />)}
            </InfiniteScroll>
        );
    } else {
        return <EmptyView />;
    }
};

TracksList.propTypes = {
    tracks: PropTypes.array.isRequired,
    loadTracks: PropTypes.func.isRequired
};

export default TracksList;
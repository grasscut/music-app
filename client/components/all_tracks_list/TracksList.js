import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import Track from './Track';
import EmptyView from '../ui/EmptyView';

class TracksList extends Component {
    constructor(props) {
        super(props);

        this.state = { loading: true };
    }

    componentWillReceiveProps(nextProps) {
        const { loading } = this.state;

        if (loading && nextProps.tracks) {
            this.setState({ loading: false });
        }
    }

    render() {
        const { tracks, loadTracks } = this.props,
            { loading } = this.state;

        if (tracks.length || loading) {
            return (
                <div>
                    <InfiniteScroll
                        className="musicApp__tracksList"
                        loadMore={loadTracks}
                        useWindow={false}
                        hasMore={true}>
                        {tracks.map(track => <Track key={track.id} track={track} />)}
                    </InfiniteScroll>
                </div>
            );
        } else {
            return <EmptyView />;
        }
    }
}

TracksList.propTypes = {
    tracks: PropTypes.array.isRequired,
    loadTracks: PropTypes.func.isRequired
};

export default TracksList;
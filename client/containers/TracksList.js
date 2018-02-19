import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import Track from '../components/Track';
import {loadTracks} from "../actions/tracks";

class TracksList extends Component {
    render() {
        const { tracks, loadTracks } = this.props;

        return (
            <InfiniteScroll
                className="musicApp__tracksList"
                pageStart={0}
                loadMore={loadTracks}
                hasMore = {true}>

                {tracks.map(track => {
                    return (
                        <Track key={track.id} track={track} />
                    );
                })}
            </InfiniteScroll>
        );
    }
}

const mapStateToProps = state => {
    return {
        tracks: state.tracks
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadTracks: offset => dispatch(loadTracks)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TracksList);
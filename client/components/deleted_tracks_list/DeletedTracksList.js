import React from 'react';
import PropTypes from 'prop-types';
import DeletedTrack from './DeletedTrack';
import EmptyView from '../ui/EmptyView';

const DeletedTracksList = ({ tracks, addTrack }) => {
    if (tracks.length) {
        return (
            <div className="musicApp__deletedTracksList">
                {tracks.map(track => <DeletedTrack key={track.id} track={track} restoreTrack={addTrack} />)}
            </div>
        );
    } else {
        return <EmptyView />
    }
};

DeletedTracksList.propTypes = {
    tracks: PropTypes.array.isRequired,
    addTrack: PropTypes.func.isRequired
};

export default DeletedTracksList;
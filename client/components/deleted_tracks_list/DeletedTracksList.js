import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DeletedTrack from './DeletedTrack';

const DeletedTracksList = ({ tracks, addTrack }) => {
    return (
       <div className="musicApp__deletedTracksList">
           {tracks.map(track => <DeletedTrack key={track.id} track={track} restoreTrack={addTrack} />)}
       </div>
    );
};

DeletedTracksList.propTypes = {
    tracks: PropTypes.array.isRequired,
    addTrack: PropTypes.func.isRequired
};

export default DeletedTracksList;
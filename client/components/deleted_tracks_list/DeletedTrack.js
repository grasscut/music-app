import React, { Component } from 'react';
import PropTypes from 'prop-types';

const DeletedTrack = ({ track, restoreTrack }) => {
    return (
        <div className="deletedTrack">
            <div className="deletedTrack__name">
                {track.name}
            </div>
            <a className="deletedTrack__restoreButton"onClick={restoreTrack.bind(this, track)}>
                Restore <span>❤️</span>
            </a>
        </div>
    );
};

DeletedTrack.propTypes = {
    track: PropTypes.object.isRequired,
    restoreTrack: PropTypes.func.isRequired
};

export default DeletedTrack;
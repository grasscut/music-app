import React from 'react';
import PropTypes from 'prop-types';

const TrackInfo = ({ track, albumImage, deleteTrack }) => {
    return (
        <div className="trackInfo">
            <div className="trackDescription">
                <div className="trackDescription__text">
                    From "{track.album.name}"<br/>
                    By {track.artists.map(artist => artist.name).concat(' ')}
                </div>
                <a className="trackDescription__deleteButton" onClick={deleteTrack.bind(this, track)}>
                    Delete this track
                </a>
            </div>
            <div className="trackInfo__albumImage">
                <img src={albumImage && albumImage.url} height="150px" />
            </div>
        </div>
    );
};

TrackInfo.propTypes = {
    track: PropTypes.object.isRequired,
    albumImage: PropTypes.object,
    deleteTrack: PropTypes.func.isRequired
};

export default TrackInfo;
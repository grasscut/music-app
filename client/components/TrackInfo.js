import React from 'react';
import PropTypes from 'prop-types';

const TrackInfo = ({ track, albumImage, removeTrack }) => {
    return (
        <div className="trackInfo">
            <div className="trackDescription">
                <div className="trackDescription__text">
                    From "{track.album.name}"<br/>
                    By {track.artists.map(artist => artist.name).concat(' ')}
                </div>
                <a className="trackDescription__deleteButton" onClick={removeTrack.bind(this, track.id)}>
                    Delete this track <span>💔</span>
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
    removeTrack: PropTypes.func.isRequired
};

export default TrackInfo;
import React from 'react';
import PropTypes from 'prop-types';

const TrackInfo = (props) => {
    const { track, albumImage, removeTrack } = props;

    return (
        <div className="trackInfo">
            <div className="trackDescription">
                <div className="trackDescription__text">
                    From "{track.album.name}"<br/>
                    By {track.artists.map(artist => artist.name).concat(' ')}
                </div>
                <a className="trackDescription__deleteButton" onClick={removeTrack.bind(this, track.id)}>
                    Delete this track 💔
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
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { chooseAlbumImage } from '../../helpers/tracks';
import TrackInfoModal from './TrackInfoModal';

class Track extends Component {
    constructor(props) {
        super(props);

        this.state = { infoModalOpen: false };
        this.toggleInfoModalOpen = this.toggleInfoModalOpen.bind(this);
    }

    toggleInfoModalOpen() {
        this.setState({ infoModalOpen: !this.state.infoModalOpen });
    }

    render() {
        const { track } = this.props,
            { infoModalOpen } = this.state,
            albumImage = chooseAlbumImage(track);

        return (
            <div>
                <div className="track" onClick={this.toggleInfoModalOpen}>
                    <img src={albumImage && albumImage.url} height="150px" />
                    <div className="track__label">
                        {track.name}
                    </div>
                </div>
                <TrackInfoModal
                    onClose={this.toggleInfoModalOpen}
                    isOpen={infoModalOpen}
                    track={track}
                    albumImage={albumImage} />
            </div>
        );
    }
}

Track.propTypes = {
    track: PropTypes.object.isRequired
};

export default Track;
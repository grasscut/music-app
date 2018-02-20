import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TrackInfoModal from './TrackInfoModal';

class Track extends Component {
    constructor(props) {
        super(props);

        this.state = { infoModalOpen: false };
        this.toggleInfoModalOpen = this.toggleInfoModalOpen.bind(this);
    }

    /**
     * Chooses the smallest image that is larger than 150px
     *
     * @param {array} images Array of album images of different sizes
     */
    chooseAlbumImage(images) {
        return images.reduce((prev, curr) => {
            const currIsLargeEnough = curr.height >= 150,
                currIsSmallerThanPrev = curr.height < prev.height;

            return currIsLargeEnough && currIsSmallerThanPrev ? curr : prev;
        });
    }

    toggleInfoModalOpen() {
        this.setState({ infoModalOpen: !this.state.infoModalOpen });
    }

    render() {
        const { track } = this.props,
            { infoModalOpen } = this.state,
            albumImage = this.chooseAlbumImage(track.album.images);

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
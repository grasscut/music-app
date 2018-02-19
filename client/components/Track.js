import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TrackInfoModal from './TrackInfoModal';

class Track extends Component {
    state = { infoModalOpen: false }

    toggleInfoModalOpen() {
        this.setState({ infoModalOpen: !this.state.infoModalOpen });
    }
    
    
    get track() {
        return this.props.track;
    }
    
    get albumImage() {
        var largeEnoughImages = this.track.album.images.filter((image) => image.height >= 150);
        largeEnoughImages.sort((image, other) => image.height - other.height); // sorting in-place is stuuupid, but that's the only sort() function JS has
        return largeEnoughImages[0];
    }
    

    render() {
        return (
            <div>
                <div className="track" onClick={this.toggleInfoModalOpen.bind(this)}>
                    <img src={this.albumImage && albumImage.url} height="150px" />
                    <div className="track__label">
                        {this.track.name}
                    </div>
                </div>
                <TrackInfoModal
                    onClose={this.toggleInfoModalOpen.bind(this)}
                    isOpen={this.state.infoModalOpen}
                    track={this.track}
                    albumImage={this.albumImage} />
            </div>
        );
    }
}

Track.propTypes = {
    track: PropTypes.object.isRequired
};

export default Track;
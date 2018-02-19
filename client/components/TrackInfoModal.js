import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import TrackInfoContainer from '../containers/TrackInfoContainer';

const TrackInfoModal = ({ onClose, isOpen, track, albumImage }) => {
    if (isOpen) {
        const title = track.name,
            content = <TrackInfoContainer track={track} albumImage={albumImage} />;

        return (
            <Modal
                onClose={onClose}
                messageTitle={title}
                messageContent={content}/>
        );
    } else {
        return null;
    }
};

TrackInfoModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    track: PropTypes.object.isRequired,
    albumImage: PropTypes.object
};

export default TrackInfoModal;
import React from 'react';
import PropTypes from 'prop-types';

export default ({ onClose, messageTitle, messageContent }) => {
    return (
        <div className="modal">
            <div className="modalMessage">
                <div className="modalMessage__title">
                    {messageTitle}
                </div>
                <div className="modalMessage__content">
                    {messageContent}
                </div>
                <div className="modalMessage__close" onClick={onClose}>✖</div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    messageTitle: PropTypes.string,
    messageContent: PropTypes.node
};
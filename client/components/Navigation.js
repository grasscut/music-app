import React from 'react';
import PropTypes from 'prop-types';

const Navigation = ({ user }) => {
    return (
        <div className="navigation">
            <span className="navigation__title">
                Your saved tracks
            </span>
            <div className="navigation__userProfile">
                <img src={user.picture} height="50px" width="50px" />
            </div>
        </div>
    );
};

Navigation.propTypes = {
    user: PropTypes.object
};

export default Navigation;
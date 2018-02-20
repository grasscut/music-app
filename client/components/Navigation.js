import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Navigation = ({ user }) => {
    return (
        <div className="navigation">
            <div className="navigation__links">
                <NavLink to='/saved_tracks'>Your saved tracks</NavLink>
                <NavLink to='/deleted'>Recently deleted</NavLink>
            </div>
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
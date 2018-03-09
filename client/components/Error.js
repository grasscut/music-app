import React from 'react';
import LoginButton from './ui/LoginButton';

export default () => {
    return (
        <div className="error">
            <div className="errorMessage">
                <div className="textBlock textBlock--white textBlock--large">
                    OH NO! <span>😱</span>
                </div>
                <div className="textBlock textBlock--green textBlock--medium textBlock--shifted">
                    An error has occurred
                </div>
                <div className="errorMessage__tryAgain">
                    Let's try again? <span>😉</span>
                    <LoginButton/>
                </div>
            </div>
        </div>
    );
};
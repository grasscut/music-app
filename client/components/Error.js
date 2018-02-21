import React from 'react';
import LoginButton from './ui/LoginButton';

export default () => {
    return (
        <div className="error">
            <div className="errorMessage">
                <div className="errorMessage__textBlock errorMessage__textBlock--white errorMessage__textBlock--large">
                    OH NO! <span>😱</span>
                </div>
                <div className="errorMessage__textBlock errorMessage__textBlock--green errorMessage__textBlock--medium">
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
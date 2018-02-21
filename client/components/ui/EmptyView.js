import React from 'react';
import emptyGif from '../../images/empty.gif';

export default () => {
    return (
        <div className="emptyView">
            <img className="emptyView__giphy" src={emptyGif} />
            <div className="textBlock textBlock--medium textBlock--green">
                You don't have any tracks here yet!
            </div>
        </div>
    );
};
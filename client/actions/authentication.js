import Spotify from 'spotify-web-api-js';
import defaultUserpic from '../images/default-userpic.jpg';

const spotifyWebApi = new Spotify();

const setUserData = response => {
    return {
        type: 'SET_USER_DATA',
        user: {
            name: response.display_name,
            email: response.email,
            picture: response.images.length ? response.images[0].url : defaultUserpic
        }
    };
};

export const authenticateUser = accessToken => {
    return dispatch => {
        if (accessToken) {
            spotifyWebApi.setAccessToken(accessToken);

            spotifyWebApi.getMe()
                .then(response =>  dispatch(setUserData(response)))
                .catch(() => {
                    window.location = '#/error';
                });
        }

        dispatch({
            type: 'AUTHENTICATE_USER',
            loggedIn: !!accessToken
        });
    };
};

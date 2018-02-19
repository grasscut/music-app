import Spotify from 'spotify-web-api-js';

const spotifyWebApi = new Spotify();

const setUserData = response => {
    return {
        type: 'SET_USER_DATA',
        user: {
            name: response.display_name,
            email: response.email,
            picture: response.images && response.images[0].url
        }
    };
};

export const authenticateUser = match => {
    return dispatch => {
        const accessToken = match.params && match.params.accessToken;

        if (accessToken) {
            spotifyWebApi.setAccessToken(accessToken);

            spotifyWebApi.getMe()
                .then(response => {
                    dispatch(setUserData(response));
                })
        }

        dispatch({
            type: 'AUTHENTICATE_USER',
            loggedIn: !!accessToken
        });
    };
};

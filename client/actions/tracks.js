import Spotify from 'spotify-web-api-js';

const spotifyWebApi = new Spotify();
let offset = 0,
    allTracksLoaded = false;

/**
 * Returns an action object for updating saved tracks list
 *
 * @param {object} response Response object from API containing tracks as 'items'
 * @param {bool}   reset    True if list has changed and needs to be re-fetched
 */
const setAllTracks = (response, reset = false) => {
    const tracks = response.items.map(item => item.track);

    return {
        type: 'LOAD_TRACKS',
        allTracks: tracks,
        reset
    };
};

const setAllTracksLoaded = payload => {
    return {
        type: 'SET_ALL_TRACKS_LOADED',
        payload
    }
};

export const loadTracks = dispatch => {
    if (!allTracksLoaded) {
        spotifyWebApi.getMySavedTracks({ offset })
            .then(response => {
                offset += 20;
                allTracksLoaded = !response.next;

                if (allTracksLoaded) {
                    dispatch(setAllTracksLoaded(true));
                }

                dispatch(setAllTracks(response));
            })
            .catch(error => {
                window.location = '#/error';
            });
    }
};

export const deleteTrack = track => {
    return dispatch => {
        spotifyWebApi.removeFromMySavedTracks([track.id])
            .then(response => {
                dispatch({
                    type: 'REMOVE_TRACK',
                    track
                });
            })
            .catch(() => {
                window.location = '#/error';
            });
    };
};

export const addTrack = track => {
    return dispatch => {
        spotifyWebApi.addToMySavedTracks([track.id])
            .then(() => {
                dispatch(setAllTracksLoaded(false));
                offset = 0;
                spotifyWebApi.getMySavedTracks({ offset })
                    .then(response => {
                        offset += 20;
                        allTracksLoaded = !response.next;

                        if (allTracksLoaded) {
                            dispatch(setAllTracksLoaded(true));
                        }

                        dispatch(setAllTracks(response, true));
                    })
                    .catch(() => {
                        window.location = '#/error';
                    });
                dispatch({
                    type: 'ADD_TRACK',
                    track
                });
            })
            .catch(() => {
                window.location = '#/error';
            });
    };
};
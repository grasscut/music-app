import Spotify from 'spotify-web-api-js';

const spotifyWebApi = new Spotify();
let offset = 0,
    allTracksLoaded = false;

export const loadTracks = dispatch => {
    if (!allTracksLoaded) {
        spotifyWebApi.getMySavedTracks({ offset })
            .then(response => {
                const tracks = response.items.map(item => item.track);

                offset += 20;
                allTracksLoaded = !response.next;

                dispatch({
                    type: 'LOAD_TRACKS',
                    tracks
                });
            });
    }
};

export const removeTrack = id => {
    return dispatch => {
        spotifyWebApi.removeFromMySavedTracks([id])
            .then(response => {
                dispatch({
                    type: 'REMOVE_TRACK',
                    id
                })
            });
    };
};
const initialState = {
    allTracks: [],
    recentlyDeletedTracks: []
};

export default function albums(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_TRACKS':
            return {
                ...state,
                allTracks: action.reset ? action.allTracks : state.allTracks.concat(action.allTracks)
            };
        case 'REMOVE_TRACK':
            const removedTrackIndex = state.allTracks.findIndex(track => track.id === action.track.id);

            return {
                ...state,
                allTracks: [
                    ...state.allTracks.slice(0, removedTrackIndex),
                    ...state.allTracks.slice(removedTrackIndex + 1)
                ],
                recentlyDeletedTracks: [
                    ...state.recentlyDeletedTracks,
                    action.track
                ]
            };
        case 'ADD_TRACK':
            const addedTrackIndex = state.recentlyDeletedTracks.findIndex(track => track.id === action.track.id);

            return {
                ...state,
                recentlyDeletedTracks: [
                    ...state.recentlyDeletedTracks.slice(0, addedTrackIndex),
                    ...state.recentlyDeletedTracks.slice(addedTrackIndex + 1)
                ]
            };
        default:
            return state;
    }
}
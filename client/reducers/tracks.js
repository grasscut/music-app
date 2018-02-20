const initialState = {
    allTracks: [],
    recentlyDeletedTracks: []
};

export default function albums(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_TRACKS':
            return {
                ...state,
                allTracks: state.allTracks.concat(action.allTracks)
            };
        case 'REMOVE_TRACK':
            const removedTrack = state.find(track => track.id === action.id),
                removedTrackIndex = state.findIndex(removedTrack);

            return {
                ...state,
                allTracks: [
                    ...state.allTracks.slice(0, removedTrackIndex),
                    ...state.allTracks.slice(removedTrackIndex + 1)
                ],
                recentlyDeletedTracks: [
                    ...state.recentlyDeletedTracks,
                    removedTrack
                ]
            };
        default:
            return state;
    }
}
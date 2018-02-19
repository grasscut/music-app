export default function albums(state = [], action) {
    switch (action.type) {
        case 'LOAD_TRACKS':
            return state.concat(action.tracks);
        case 'REMOVE_TRACK':
            const removedTrackIndex = state.findIndex(track => track.id === action.id);

            return [
                ...state.slice(0, removedTrackIndex),
                ...state.slice(removedTrackIndex + 1)
            ];
        default:
            return state;
    }
}
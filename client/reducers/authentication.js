const initialState = {
    loggedIn: false,
    user: {}
};

export default function authentication(state = initialState, action) {
    switch (action.type) {
        case 'AUTHENTICATE_USER':
            return {
                ...state,
                loggedIn: action.loggedIn
            };
        case 'SET_USER_DATA':
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
}
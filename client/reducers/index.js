import { combineReducers } from 'redux';
import authentication from './authentication';
import tracks from './tracks';

const musicApp = combineReducers({
    authentication,
    tracks
});

export default musicApp;
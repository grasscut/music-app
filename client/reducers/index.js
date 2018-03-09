import { combineReducers } from 'redux';
import authentication from './authentication';
import tracks from './tracks';
import popularity from './popularity';

const musicApp = combineReducers({
    authentication,
    tracks,
    popularity
});

export default musicApp;
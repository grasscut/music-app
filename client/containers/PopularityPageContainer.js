import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loadTracks } from '../actions/tracks';
import { setPopularityData } from '../actions/popularity';
import PopularityPage from '../components/PopularityPage';

const mapStateToProps = state => {
    return {
        tracks: state.tracks.allTracks,
        isReady: state.tracks.allTracksLoaded,
        popularity: state.popularity
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadTracks: () => dispatch(loadTracks),
        setPopularityData: tracks => dispatch(setPopularityData(tracks))
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(PopularityPage)
);
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { chooseAlbumImage } from '../helpers/tracks';
import { getPopularityName } from '../helpers/popularity';
import Modal from './ui/Modal';

class PopularityPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            albumCover: null,
            infoModalOpen: true
        };
        this.toggleInfoModalOpen = this.toggleInfoModalOpen.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const { loadTracks, tracks, isReady } = nextProps,
            lastLoadedTrack = tracks[tracks.length-1],
            { setPopularityData } = this.props;

        if (isReady && !this.props.isReady) {
            setPopularityData(tracks);
        } else if (tracks.length !== this.props.tracks.length) {
            this.setState({
                albumCover: chooseAlbumImage(lastLoadedTrack, 250)
            });

            loadTracks();
        }
    }

    toggleInfoModalOpen() {
        const { isReady, tracks, loadTracks, setPopularityData } = this.props;

        this.setState({ infoModalOpen: !this.state.infoModalOpen });

        if (isReady) {
            setPopularityData(tracks);
        } else {
            loadTracks();
        }
    }

    getInfoModalContent() {
        return (
            <div>
                The popularity is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are.
            </div>
        );
    }

    render() {
        const { albumCover, infoModalOpen } = this.state,
            { isReady, popularity, tracks } = this.props;

        if (infoModalOpen) {
            return <Modal
                onClose={this.toggleInfoModalOpen}
                messageTitle="How mainstream is your music taste?"
                messageContent={this.getInfoModalContent()}/>
        } else if (isReady) {
            return (
                <div className="musicApp__popularityPage">
                    <div className="textBlock textBlock--medium textBlock--white">
                        {popularity.average && `You are ${getPopularityName(popularity.average)}!`}
                    </div>
                    <div className="textBlock textBlock--small textBlock--green">
                        You have <span className="number">{tracks.length}</span> tracks
                    </div>
                    <div className="textBlock textBlock--small textBlock--white">
                        {popularity.average && <span>Average popularity is <span className="number">{popularity.average}</span>/100</span>}
                    </div>
                    <div className="textBlock textBlock--small textBlock--green">
                        {popularity.mostPopular.length &&
                            <span>
                                <span className="boldText">Most popular tracks are: </span>
                                {popularity.mostPopular.map(track => track.name).join(', ')}
                                <span className="number"> ({popularity.mostPopular[0].popularity})</span>
                            </span>
                        }
                    </div>
                    <div className="textBlock textBlock--small textBlock--white">
                        {popularity.leastPopular.length &&
                            <span>
                                <span className="boldText">Least popular tracks are: </span>
                                {popularity.leastPopular.map(track => track.name).join(', ')}
                                <span className="number"> ({popularity.leastPopular[0].popularity})</span>
                            </span>
                        }
                    </div>
                </div>
            );
        } else {
            return (
                <div className="musicApp__popularityPage musicApp__popularityPage--loading">
                    {albumCover && <img src={albumCover.url} height="250px" width="250px" />}
                </div>
            );
        }
    }
}

PopularityPage.propTypes = {
    tracks: PropTypes.array.isRequired,
    isReady: PropTypes.bool.isRequired,
    loadTracks: PropTypes.func.isRequired,
    setPopularityData: PropTypes.func.isRequired,
    popularity: PropTypes.object
};

export default PopularityPage;
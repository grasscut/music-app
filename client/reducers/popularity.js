const initialState = {
    average: null,
    mostPopular: [],
    leastPopular: []
};

export default function popularity(state = initialState, action) {
    switch (action.type) {
        case 'SET_POPULARITY_DATA':
            const tracks = action.payload,
                popularityValues = tracks.map(track => track.popularity),
                biggestValue = Math.max(...popularityValues),
                smallestValue = Math.min(...popularityValues),
                total = popularityValues.reduce((prev, curr) => prev + curr);

            return {
                ...state,
                average: Math.round(total / tracks.length),
                mostPopular: tracks.filter(track => track.popularity === biggestValue),
                leastPopular: tracks.filter(track => track.popularity === smallestValue)
            };
        default:
            return state;
    }
}
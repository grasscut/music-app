const popularityNames = {
    25: 'weird',
    50: 'a hipster',
    75: 'mainstream',
    100: 'too mainstream'
};

export const getPopularityName = score => {
    const scoreRange = Object.keys(popularityNames).find(maxScore => score <= maxScore);

    return popularityNames[scoreRange];
};
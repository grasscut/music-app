export const chooseAlbumImage = (track, height = 150) => {
    if (track.album && track.album.images) {
        return track.album.images.reduce((prev, curr) => {
            const currIsLargeEnough = curr.height >= height,
                currIsSmallerThanPrev = curr.height < prev.height;

            return currIsLargeEnough && currIsSmallerThanPrev ? curr : prev;
        });
    }

    return '';
};
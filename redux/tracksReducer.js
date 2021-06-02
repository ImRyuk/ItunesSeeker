import {
    ADD_TO_TRACK_LIST, CHECK_IF_EXISTS,
    REMOVE_FROM_TRACK_LIST
} from './actions';

const initialState = {
    tracks: []
};

const tracksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_TRACK_LIST:
            let id = action.payload.trackId;
            let artistName = action.payload.artistName;
            let releaseDate = action.payload.releaseDate;
            let primaryGenreName = action.payload.primaryGenreName;
            let trackName = action.payload.trackName;
            let image = action.payload.artworkUrl100;
            let rating = action.payload.rating;
            const track = {id: id, name: trackName,artistName: artistName, year: releaseDate, genre: primaryGenreName, image: image, rating: rating}
            return { ...state, tracks: [...state.tracks, track] };
        case REMOVE_FROM_TRACK_LIST:
            return {
                ...state,
                tracks: state.tracks.filter(track => track.id !== action.payload.trackId)
            };
        case CHECK_IF_EXISTS:
            return state.filter((item) => item.id === action.payload.trackId);
        default:
            return state;
    }
}

export default tracksReducer;
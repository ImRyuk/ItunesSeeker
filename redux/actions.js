// Define action types
export const ADD_TO_TRACK_LIST = 'ADD_TO_TRACK_LIST';
export const REMOVE_FROM_TRACK_LIST = 'REMOVE_FROM_TRACK_LIST';
export const CHECK_IF_EXISTS = 'CHECK_IF_EXISTS';

export const addTrack = track => {
    return {
        type: ADD_TO_TRACK_LIST,
        payload : track
    };
};

export const removeTrack = track => dispatch => {
    dispatch({
        type: REMOVE_FROM_TRACK_LIST,
        payload: track
    });
};
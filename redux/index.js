// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
import tracksReducer from './tracksReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
    tracksReducer: tracksReducer
});
// Exports
export default rootReducer;
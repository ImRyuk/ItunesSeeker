import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';

import tracksReducer from "./tracksReducer";
import thunk from "redux-thunk";

const persistConfig = {
    key: "brkp",
    storage: AsyncStorage,
    whitelist: ['tracks']
};

const rootReducer = combineReducers({
    tracks: tracksReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
export const persistor = persistStore(store);
import {
    createStore,
    applyMiddleware
} from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import {
    persistStore
} from "redux-persist";
const middewares = [];
if (process.env.NODE_ENV === 'development') {
    middewares.push(logger)
}
export const store = createStore(rootReducer, applyMiddleware(...middewares));
export const persistor = persistStore(store);

export default {
    store,
    persistor
};
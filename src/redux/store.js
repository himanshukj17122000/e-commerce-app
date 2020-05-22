import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

const middewares = [thunk];
if (process.env.NODE_ENV === 'development') {
  middewares.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middewares));
export const persistor = persistStore(store);

export default {
  store,
  persistor,
};

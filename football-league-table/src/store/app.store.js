import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import FootballReducer from '../appData/footballData/reducer';
const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore);
 
/**
 * App store
 */
export default function configureStore() {
  return createStoreWithMiddleware(FootballReducer);
}
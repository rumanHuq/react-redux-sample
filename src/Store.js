import {combineReducers, applyMiddleware, createStore} from 'redux';
import reduxPromise from 'redux-promise';
import PostReducers from './Posts/Reducers';

const storeWithMiddleWare = applyMiddleware(reduxPromise)(createStore);

const postRootReducers = combineReducers({
  PostReducers
});

export default storeWithMiddleWare(postRootReducers);
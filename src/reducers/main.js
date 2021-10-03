/* eslint-disable import/no-extraneous-dependencies */
// reducers.js
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import session from '../store/ducks/session';
import notify from '../store/ducks/notify';
import loader from '../store/ducks/loader';

const createRootReducer = (history) =>
  combineReducers({
    session,
    notify,
    loader,
    router: connectRouter(history),
  });
export default createRootReducer;

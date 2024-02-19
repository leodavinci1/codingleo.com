/* eslint-disable import/no-extraneous-dependencies */
// reducers.js
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import locale from '../store/ducks/locale';
import node from '../store/ducks/node';

const createRootReducer = (history) =>
  combineReducers({
    locale,
    node,
    router: connectRouter(history),
  });
export default createRootReducer;

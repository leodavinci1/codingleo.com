/* eslint-disable no-underscore-dangle */
import { createReducer, createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  setLine: ['data'],
});

const initialState = {
  line: 0,
};

function setLine(state, { data }) {
  return {
    ...state,
    line: data,
  };
}

const node = {
  [Types.SET_LINE]: setLine,
};

export default createReducer(initialState, node);

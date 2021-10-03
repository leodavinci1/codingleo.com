/* eslint-disable no-underscore-dangle */
import { createReducer, createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  action: [''],
});

const initialState = {
  data: false,
};

function action(state) {
  return {
    ...state,
    data: !state.data,
  };
}

const session = {
  [Types.ACTION]: action,
};

export default createReducer(initialState, session);

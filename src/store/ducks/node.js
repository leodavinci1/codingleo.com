/* eslint-disable no-underscore-dangle */
import { createReducer, createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  setLine: ['data'],
  setCursorText: ['data'],
  setCodeOpened: ['data'],
});

const initialState = {
  line: null,
  cursorText: '',
  isVSCodeOpened: false,
};

function setLine(state, { data }) {
  return {
    ...state,
    line: data,
  };
}

function setCursorText(state, { data }) {
  return {
    ...state,
    cursorText: data,
  };
}
function setCodeOpened(state, { data }) {
  return {
    ...state,
    isVSCodeOpened: data,
  };
}

const node = {
  [Types.SET_LINE]: setLine,
  [Types.SET_CURSOR_TEXT]: setCursorText,
  [Types.SET_CODE_OPENED]: setCodeOpened,
};

export default createReducer(initialState, node);

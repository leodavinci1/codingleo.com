/* eslint-disable no-underscore-dangle */
import { createReducer, createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  toggleLocale: [''],
});

const initialState = {
  locale: 'EN-US',
};

function toggleLocale(state) {
  return {
    ...state,
    locale: state.locale === 'EN-US' ? 'PT-BR' : 'EN-US',
  };
}

const locale = {
  [Types.TOGGLE_LOCALE]: toggleLocale,
};

export default createReducer(initialState, locale);

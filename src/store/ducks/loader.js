import { createReducer, createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  startLoading: ['data'],
  stopLoading: ['data'],
  stopLoadingFull: ['data'],
});

const initialState = {
  login: {
    loginUser: 0,
    getMarketplaces: 0,
    getUnities: 0,
  },
  modules: {
    getModules: 0,
    loadModule: 0,
  },
};

function startLoading(state, { data }) {
  return {
    ...state,
    [data.object]: {
      ...state[data.object],
      [data.method]: 1,
    },
  };
}

function stopLoading(state, { data }) {
  return {
    ...state,
    [data.object]: {
      ...state[data.object],
      [data.method]: state[data.object][data.method] ? 0 : 1,
    },
  };
}

function stopLoadingFull(state, { data }) {
  return {
    ...state,
    [data]: initialState[data],
  };
}

const loader = {
  [Types.START_LOADING]: startLoading,
  [Types.STOP_LOADING]: stopLoading,
  [Types.STOP_LOADING_FULL]: stopLoadingFull,
};

export default createReducer(initialState, loader);

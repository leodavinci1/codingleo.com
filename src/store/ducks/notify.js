import { createReducer, createActions } from 'reduxsauce';
import { toast } from 'react-toastify';

const options = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const { Types, Creators } = createActions({
  error: ['msg'],
  warn: ['msg'],
  info: ['msg'],
  success: ['msg'],
});

const initialState = {
  message: '',
};

function error(state, { msg }) {
  toast.error(msg, options);
  return {
    message: msg,
  };
}

function success(state, { msg }) {
  toast.success(msg, options);
  return {
    message: msg,
  };
}

function warn(state, { msg }) {
  toast.warn(msg, options);
  return {
    message: msg,
  };
}

function info(state, { msg }) {
  toast.info(msg, options);
  return {
    message: msg,
  };
}

const notify = {
  [Types.ERROR]: error,
  [Types.WARN]: warn,
  [Types.SUCCESS]: success,
  [Types.INFO]: info,
};

export default createReducer(initialState, notify);

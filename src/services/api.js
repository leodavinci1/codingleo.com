/* eslint-disable no-underscore-dangle */
import Axios from 'axios';
import { getConfig } from '../store/globals';

const axios = Axios.create({});

export const api = (token) => {
  axios.defaults.baseURL = getConfig().AUTH_DXCO_BASE_URL;
  axios.defaults.headers = {
    Authorization: `Bearer ${token}`,
  };
  return axios;
};

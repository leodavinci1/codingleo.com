import { api } from './api';

export const getData = ({ token }) => api(token).get('/data');

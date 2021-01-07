import {create} from 'apisauce';

const api = create({
  baseURL: 'https://thuythi.herokuapp.com',
  headers: {'Content-Type': 'application/json', isRefreshToken: true},
});
export const url = 'https://thuythi.herokuapp.com/image/get/';
export default api;

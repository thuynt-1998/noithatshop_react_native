import api from '../../contants/https-base';
import AsyncStorage from '@react-native-community/async-storage';

const getRoom = async () => {
  return api.get('/getAll/room').then((res) => res);
};
const getProductType = (id: number) => {
  return api.get(`/getByRoomId/product-type?id=${id}`).then((res) => res);
};
const getProduct = (id: number) => {
  return api.get(`/get/product/${id}`).then((res) => res);
};
const getProductByTypeId = (id: number) => {
  return api.get(`/getbytype/product/${id}`).then((res) => res);
};
export default {getRoom, getProductType, getProduct, getProductByTypeId};

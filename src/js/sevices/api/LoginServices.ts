import AsyncStorage from '@react-native-community/async-storage';
import api from '../../contants/https-base';

const author = (username: string, password: string) => {
  return api.post('/login/customer', {username, password}).then((res) => {
    console.log(res);
    return res;
  });
};
const removeItem = async () => {
  await AsyncStorage.removeItem('token');
};
const setItem = async (token: string) => {
  await AsyncStorage.setItem('token', JSON.stringify(token));
};
const getItem = async () => {
  return await AsyncStorage.getItem('token');
};

const signup = (data: any) => {
  return api.post('/signup/customer', data).then((res) => {
    return res;
  });
};
const getCart = async () => {
  const value = await getItem();
  return api
    .get(
      '/customer/getAll/cart',
      {},
      {headers: {Authorization: 'Bearer ' + JSON.parse(value)}},
    )
    .then((res) => res);
};
const refresh = async () => {
  const value = await getItem();

  return api
    .get(
      '/refreshtoken',
      {},
      {
        headers: {
          Authorization: 'Bearer ' + JSON.parse(value),
          isRefreshToken: true,
        },
      },
    )
    .then((res) => res);
};
export default {
  author,
  removeItem,
  setItem,
  signup,
  getItem,
  getCart,
  refresh,
};

import api from '../../contants/https-base';
import LoginServices from './LoginServices';
const createPayment = async (data: any) => {
  const token = await LoginServices.getItem();

  return api
    .post('/api/pay/vnpay/createpay', data, {
      headers: {
        Authorization: 'Bearer ' + JSON.parse(token ? token : ''),
      },
    })
    .then((res: any) => (res.data.data ? res.data.data : ''));
};
export default {createPayment};

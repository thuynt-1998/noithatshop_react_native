import React, {useEffect, useCallback, useState} from 'react';
import {Linking, Alert} from 'react-native';
const PaymentProduct = ({onOrderCart}) => {
  const linking = useCallback(async (data) => {
    const payUrl = await PayServices.createPayment(data);
    const supported = await Linking.canOpenURL(payUrl);
    if (supported) {
      await Linking.openURL(payUrl);
      setLink(!link);
    } else {
      Alert.alert(`Don't know how to open this URL: ${payUrl}`);
    }
  }, []);
  () => {};

  useEffect(() => {
    Linking.addEventListener('url', onOrderCart);
    return Linking.removeEventListener('url', onOrderCart);
  }, []);
  return {linking};
};

export default PaymentProduct;

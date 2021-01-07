import React, {useEffect} from 'react';
import {Button} from 'react-native-paper';

import {
  Platform,
  DeviceEventEmitter,
  NativeModules,
  NativeEventEmitter,
  Text,
} from 'react-native';
import RNMomosdk from 'react-native-momosdk';
import {SafeAreaView} from 'react-native-safe-area-context';

const RNMomosdkModule = NativeModules.RNMomosdk;
const EventEmitter = new NativeEventEmitter(RNMomosdkModule);

const PaymentProduct = (props) => {
  const merchantname = 'thuythi';
  const merchantcode = 'MOMOHTGJ20210101';
  const merchantNameLabel = 'thuythi';
  const billdescription = 'product';
  const amount = 5000;
  const enviroment = '0';
  useEffect(() => {
    EventEmitter.addListener(
      'RCTMoMoNoficationCenterRequestTokenReceived',
      (response) => {
        try {
          console.log('<MoMoPay>Listen.Event::' + JSON.stringify(response));
          if (response && response.status == 0) {
            let fromapp = response.fromapp;
            let momoToken = response.data;
            let phonenumber = response.phonenumber;
            let message = response.message;
            let orderId = response.refOrderId;
          } else {
            //let message = response.message;
            //Has Error: show message here
            console.log('thuy');
          }
        } catch (ex) {
          console.log(ex);
        }
      },
    );
    EventEmitter.addListener(
      'RCTMoMoNoficationCenterRequestTokenState',
      (response) => {
        console.log('<MoMoPay>Listen.RequestTokenState:: ' + response.status);
        // status = 1: Parameters valid & ready to open MoMo app.
        // status = 2: canOpenURL failed for URL MoMo app
        // status = 3: Parameters invalid
      },
    );
  }, []);

  const onPress = async () => {
    let jsonData = {};
    jsonData.enviroment = enviroment; //SANBOX OR PRODUCTION
    jsonData.action = 'gettoken'; //DO NOT EDIT
    jsonData.merchantname = merchantname; //edit your merchantname here
    jsonData.merchantcode = merchantcode; //edit your merchantcode here
    jsonData.merchantnamelabel = merchantNameLabel;
    jsonData.description = billdescription;
    jsonData.amount = amount; //order total amount
    jsonData.orderId = 'DB-00001';
    jsonData.orderLabel = 'Ma don hang';
    jsonData.appScheme = 'momohtgj20210101'; // iOS App Only , match with Schemes Indentify from your  Info.plist > key URL types > URL Schemes
    console.log('data_request_payment ' + JSON.stringify(jsonData));
    if (Platform.OS === 'android') {
      let dataPayment = await RNMomosdk.requestPayment(jsonData);
      momoHandleResponse(dataPayment);
    } else {
      let dataPayment = await RNMomosdk.requestPayment(jsonData);
      momoHandleResponse(dataPayment);
      console.log(':res' + JSON.stringify(dataPayment));
    }
  };

  const momoHandleResponse = async (response) => {
    console.log(':res' + JSON.stringify(response));
    try {
      if (response && response.status == 0) {
        //SUCCESS continue to submit momoToken,phonenumber to server
        let fromapp = response.fromapp; //ALWAYS:: fromapp == momotransfer
        let momoToken = response.data;
        let phonenumber = response.phonenumber;
        let message = response.message;
      } else {
        //let message = response.message;
        //Has Error: show message here
      }
    } catch (ex) {}
  };
  return {onPress};
};

export default PaymentProduct;

import React, { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { Button } from 'react-native-paper';

import InputLogin from '../components/InputLogin';


const valid = yup.object().shape({
    name: yup.string().required("Tên khách hàng không để trống"),
    phone: yup
        .string()
        .required("Số điện thoại không để trống"),
    address: yup.string().required("Địa chỉ không để trống")
});
const FormOrder = (props: any) => {
    const { handleSubmit, errors, control } = useForm({
        resolver: yupResolver(valid),
        defaultValues: { name: "", phone: "", address: "" }
    });
    const { navigation } = props

    const onData = useCallback((data) => {
        console.log(data);
        navigation.navigate("cartorder", { info: data })
    }, [])
    return (
        <View style={{ flex: 1 }}>
            <View style={{ paddingHorizontal: 20, paddingVertical: 30, }}>
                <Controller
                    control={control}
                    name="name"
                    render={({ onChange, value }) => (
                        <InputLogin
                            onValue={onChange}
                            errors={errors.name}
                            title="Tên người nhận"
                            left={
                                <FontAwesome5 name="user" size={20} color="rgb(120,120,120)" />
                            }
                            secureTextEntry={false}
                            value={value}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="phone"
                    render={({ onChange, value }) => (
                        <InputLogin
                            onValue={onChange}
                            errors={errors.phone}
                            title="Số điện thoại"
                            left={
                                <MaterialIcons
                                    name="phone-android"
                                    size={24}
                                    color="rgb(120,120,120)"
                                />
                            }
                            secureTextEntry={false}
                            value={value}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="address"
                    render={({ onChange, value }) => (
                        <InputLogin
                            onValue={onChange}
                            errors={errors.address}
                            title="Địa chỉ"
                            left={
                                <FontAwesome5 name="address-card" size={24} color="rgb(120,120,120)" />
                            }
                            secureTextEntry={false}
                            value={value}
                        />
                    )}
                />

            </View>
            <View style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
            }}>
                <Button mode="contained" style={{
                    height: 50,
                    backgroundColor: "rgb(99,177,28)",
                    justifyContent: "center",
                    borderRadius: 0,
                }} onPress={handleSubmit(onData)}> Chọn</Button>
            </View>


        </View>
    );
}

export default FormOrder;
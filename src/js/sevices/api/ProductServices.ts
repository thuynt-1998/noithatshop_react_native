import api from "../../contants/https-base";
import LoginServices from "./LoginServices";

const saveCart = async (data: any) => {
  const token = await LoginServices.getItem();
  if (token) {
    return api
      .post("/customer/choose/cart", data, {
        headers: { Authorization: "Bearer " + JSON.parse(token) },
      })
      .then((res) => res);
  } else {
    return "no";
  }
};
const getProductTypeAll = () => {
  return api.get("/admin/getAll/product-type").then((res) => res);
};
const getProductNew = () => {
  return api.get("/admin/getnew/product").then((res) => res);
};
const saveOrderCart = async (data: any) => {
  const token = await LoginServices.getItem();

  return api
    .post("/order/cart", data, {
      headers: {
        Authorization: "Bearer " + JSON.parse(token),
      },
    })
    .then((res) => res);
};
const getOrderCart = async () => {
  const token = await LoginServices.getItem();

  return api
    .get(
      "/getAll/order/cart",
      {},
      {
        headers: {
          Authorization: "Bearer " + JSON.parse(token),
        },
      }
    )
    .then((res) => res);
};

export default {
  saveCart,
  getProductTypeAll,
  getProductNew,
  saveOrderCart,
  getOrderCart,
};

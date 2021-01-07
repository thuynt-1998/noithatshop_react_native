import * as yup from "yup";

export const valid = yup.object().shape({
  username: yup.string().required("Số điện thoại không được để trống"),
  password: yup
    .string()
    .required("Mật khẩu không để trống")
    .min(6, "Mật khẩu nhiều hơn 6 kí tự "),
  passwordAgain: yup.string().required("Mật khẩu không được để trống"),
  account: yup.string().required("Tên tài khoản không để trống"),
});

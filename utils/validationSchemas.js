import * as yup from "yup";

export const LOGIN_SCHEMA = yup.object({
  login: yup.string().trim().email().required(),
  password: yup
    .string()
    .trim()
    .min(8)
    .max(32)
    .matches(/(?=.*[a-z])/, "Password must contain at least 1 a-z")
    .matches(/(?=.*[A-Z])/, "Password must contain at least 1 A-Z")
    .required(),
});

export const SIGN_UP_VALIDATION_SCHEMA = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2)
    .max(32)
    .matches(/(?=.*[A-Z])/)
    .required(),
  lastName: yup
    .string()
    .trim()
    .min(2)
    .max(32)
    .matches(/(?=.*[A-Z])/)
    .required(),
  nickName: yup.string().trim().min(3).max(32),
  email: yup.string().trim().email().required(),
  password: yup
    .string()
    .trim()
    .min(8)
    .max(32)
    .matches(/(?=.*[a-z])/, "Password must contain at least 1 a-z")
    .matches(/(?=.*[A-Z])/, "Password must contain at least 1 A-Z")
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("confirm password is required"),
});

import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required"),
    password: yup
        .string()
        .min(4, "Password should be of minimum 4 characters length")
        .max(15, "Password should be of maximum 15 characters length")
        .required("Password is required"),
});

import * as yup from "yup";

export const securitySchema = yup.object().shape({
    current_pass: yup.string().required("Required"),
    password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(15, "Password must be at most 15 characters")
        .matches(/[0-9]/, "Password requires a number")
        .matches(/[a-z]/, "Password requires a lowercase letter")
        .matches(/[A-Z]/, "Password requires an uppercase letter")
        .matches(/[^\w]/, "Password requires a symbol")
        .required("Required"),
    confirm_pass: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords do not match")
        .required("Required"),
});

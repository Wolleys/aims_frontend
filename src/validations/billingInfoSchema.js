import * as yup from "yup";

export const billingInfoSchema = yup.object().shape({
    first_name: yup.string().required("Required"),
    last_name: yup.string().required("Required"),
    address_line_1: yup.string().required("Required"),
    city: yup.string().required("Required"),
    postal_code: yup.string().required("Required"),
    country: yup.string().required("Required"),
});

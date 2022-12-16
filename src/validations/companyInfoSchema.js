import * as yup from "yup";

export const companyInfoSchema = yup.object().shape({
    first_name: yup.string().required("Required"),
    last_name: yup.string().required("Required"),
    user_name: yup.string().required("Required"),
    company_name: yup.string().required("Required"),
    phone_number: yup.string().required("Required"),
    address_line_1: yup.string().required("Required"),
    city: yup.string().required("Required"),
    postal_code: yup.string().required("Required"),
    country: yup.string().required("Required"),
});

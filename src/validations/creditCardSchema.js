import * as yup from "yup";

export const creditCardSchema = yup.object().shape({
    card_holder_name: yup.string().required("Required"),
    card_number: yup.number().positive().required("Required"),
    card_exp_month: yup.number().positive().required("Required"),
    card_exp_year: yup.number().positive().required("Required"),
    cvv: yup.number().positive().required("Required"),
});

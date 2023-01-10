import * as yup from "yup";
const phoneRegExp =
    /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;

export const phoneNumberSchema = yup.object().shape({
    phone_number: yup
        .string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Required"),
});

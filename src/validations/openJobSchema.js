import * as yup from "yup";

export const openJobSchema = yup.object().shape({
    date_opened: yup.date().required("Required"),
    job_number: yup.string().required("Required"),
    client_id: yup.number().positive().required("Required"),
    aircraft_reg: yup.string().required("Required"),
    aircraft_type: yup.string().required("Required")
});

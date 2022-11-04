import * as yup from "yup";

export const partsSchema = yup.object().shape({
    date_of_issue: yup.date().required("Required"),
    part_id: yup.string().required("Required"),
    description: yup.string().required("Required"),
    serial_number: yup.string().required("Required"),
    part_status: yup.string().required("Required"),
    quantity_on_hand: yup.number().positive().required("Required"),
    qty_issued: yup.number().positive().required("Required"),
    usp_usd: yup.number().positive().required("Required"),
    issued_to: yup.string().required("Required"),
});

import * as yup from "yup";

export const partEntrySchema = yup.object().shape({
    date_of_entry: yup.date().required("Required"),
    description: yup.string().required("Required"),
    part_number: yup.string().required("Required"),
    serial_number: yup.string().required("Required"),
    starting_quantity: yup.number().positive().required("Required"),
    quantity_received: yup.number().positive().required("Required"),
    quantity_issued: yup.number().positive().required("Required"),
    reorder_level: yup.number().positive().required("Required"),
    part_status: yup.string().required("Required"),
    measure: yup.string().required("Required"),
    location: yup.string().required("Required"),
    date_of_production: yup.date().required("Required"),
    shelf_life: yup.number().positive().required("Required"),
    duration: yup.string().required("Required"),
    bp_in_usd: yup.number().positive().required("Required"),
    bp_in_local: yup.number().positive().required("Required"),
    sp_in_usd: yup.number().positive().required("Required"),
});

import React from "react";
import { useField } from "formik";
import AuthTextField from "./AuthTextField";

export default function FormikTextField({ formikKey, ...props }) {
    const [field, meta] = useField(formikKey);
    return (
        <AuthTextField
            id={field.name}
            name={field.name}
            helperText={meta.touched ? meta.error : ""}
            error={meta.touched && Boolean(meta.error)}
            value={field.value}
            onChange={field.onChange}
            {...props}
        />
    );
}
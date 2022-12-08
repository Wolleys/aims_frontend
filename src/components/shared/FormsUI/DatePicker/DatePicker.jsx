import dayjs from "dayjs";
import { useState } from "react";
import TextField from "../TextField";
import StyledDatePicker from "./StyledDatePicker";
import { useField, useFormikContext } from "formik";

export default function DatePicker({ name, ...otherProps }) {
    const [value, setValue] = useState(dayjs(new Date()));
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);

    const handleChange = (newValue) => {
        setValue(newValue);
        setFieldValue(field.name, newValue);
    };

    const configDatePicker = {
        value: value,
        onChange: handleChange,
    };

    const configTextField = {
        ...field,
        ...otherProps,
    };

    if (meta && meta.touched && meta.error) {
        configTextField.error = true;
        configTextField.helperText = meta.error;
    }

    return (
        <StyledDatePicker
            {...configDatePicker}
            renderInput={(params) => <TextField {...params} {...configTextField} />}
        />
    );
}

import { useField } from "formik";
import StyledTextField from "../TextField/StyledTextField";

const DatePicker = ({ name, ...otherProps }) => {
    const [field, meta] = useField(name);

    const configDatePicker = {
        ...field,
        type: "date",
        size: "small",
        ...otherProps,
        fullWidth: true,
        variant: "outlined",
    }

    if (meta && meta.touched && meta.error) {
        configDatePicker.error = true;
        configDatePicker.helperText = meta.error;
    }

  return <StyledTextField {...configDatePicker} />;
};

export default DatePicker;

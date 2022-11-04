import { useField } from "formik";
import StyledTextField from "./StyledTextField";

const TextField = ({ name, ...otherProps }) => {
    const [field, meta] = useField(name);

    const configTextField = {
        ...field,
        size: "small",
        ...otherProps,
        fullWidth: true,
        variant: "outlined",
    };

    if (meta && meta.touched && meta.error) {
        configTextField.error = true;
        configTextField.helperText = meta.error;
    }

    return <StyledTextField {...configTextField} />;
};

export default TextField;

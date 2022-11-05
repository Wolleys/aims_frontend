import TextField from "../TextField";
import { useField, useFormikContext } from "formik";
import StyledAutoComplete from "./StyledAutoComplete";

const AutoComplete = ({ name, options, ...otherProps }) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);

    const handleChange = (evt, value) => {
        setFieldValue(name, value?.value);
    };

    const configAutoComplete = {
        options: options,
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
        <StyledAutoComplete
            {...configAutoComplete}
            renderInput={(params) => <TextField {...params} {...configTextField} />}
        />
    );
};

export default AutoComplete;

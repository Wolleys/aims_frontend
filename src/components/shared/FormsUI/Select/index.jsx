import { MenuItem } from "@mui/material";
import StyledSelect from "./StyledSelect";
import { useField, useFormikContext } from "formik";

const Select = ({ name, options, ...otherProps }) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);

    const handleChange = (evt) => {
        const { value } = evt.target;
        setFieldValue(name, value);
    };

    const configSelect = {
        ...field,
        ...otherProps,
        onChange: handleChange,
    };

    if (meta && meta.touched && meta.error) {
        configSelect.error = true;
        configSelect.helperText = meta.error;
    }

    return (
        <StyledSelect {...configSelect} >
            {options?.map((option, index) => {
                return (
                    <MenuItem key={option.value} value={option.value} sx={{fontSize: "14px"}}>
                        {option.label}
                    </MenuItem>
                );
            })}
        </StyledSelect>
    );
};

export default Select;

import { MenuItem } from "@mui/material";
import { useField, useFormikContext } from "formik";
import StyledTextField from "../TextField/StyledTextField";

const Select = ({ name, options, ...otherProps }) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);

    const handleChange = (evt) => {
        const { value } = evt.target;
        setFieldValue(name, value);
    };

    const configSelect = {
        ...field,
        select: true,
        size: "small",
        ...otherProps,
        fullWidth: true,
        variant: "outlined",
        onChange: handleChange,
    };

    const dropDownMenu = {
        MenuProps: {
            PaperProps: {
                style: {
                    color: "#666",
                    marginTop: "5px",
                    boxShadow: "none",
                    borderRadius: "4px",
                    border: "1px solid #d5d8e1",
                },
            },
        },
    };

    if (meta && meta.touched && meta.error) {
        configSelect.error = true;
        configSelect.helperText = meta.error;
    }

    return (
        <StyledTextField {...configSelect} SelectProps={dropDownMenu}>
            {options?.map((option, index) => {
                return (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                );
            })}
        </StyledTextField>
    );
};

export default Select;

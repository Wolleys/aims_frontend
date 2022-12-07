import { useContext } from "react";
import { MenuItem } from "@mui/material";
import StyledSelect from "./StyledSelect";
import { useField, useFormikContext } from "formik";
import { ThemeContext } from "../../../../context/ThemeContextProvider";

const Select = ({ name, options, ...otherProps }) => {
    const { theme } = useContext(ThemeContext);
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);

    const menuItemStyle = {
        fontSize: "14px",
        color: theme === "light" ? "#24292f" : "#c9d1d9",
        "&:hover": {
            backgroundColor: theme === "light" ? "#F0F2F4 !important" : "#21262C !important",
        },
        "&.Mui-selected, &.Mui-selected:hover": {
            backgroundColor: theme === "light" ? "#F0F2F4" : "#21262C",
        },
    }

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
                    <MenuItem key={option.value} value={option.value} sx={menuItemStyle} >
                        {option.label}
                    </MenuItem>
                );
            })}
        </StyledSelect>
    );
};

export default Select;

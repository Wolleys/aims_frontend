import { useContext } from "react";
import { TextField } from "@mui/material";
import { ThemeContext } from "../../../../../context/ThemeContextProvider";

export default function StyledTextField({ ...props }) {
    const { theme } = useContext(ThemeContext);

    const AuthTextField = {
        borderRadius: "4px",
        backgroundColor: theme === "light" ? "#f6f8fa" : "#0d1117",
        "& .MuiOutlinedInput-root": {
            "& input": {
                height: "unset",
                fontWeight: 400,
                fontSize: "14px",
                padding: "6px 12px",
                color: theme === "light" ? "#24292f" : "#c9d1d9",
                "&::placeholder": {
                    color: theme === "light" ? "#24292f" : "#c9d1d9",
                    fontWeight: 500,
                },
            },
            "& fieldset": {
                borderRadius: "6px",
                border: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
            },
            "&:hover fieldset": {
                border: theme === "light" ? "1px solid #d5d8e1" : "1px solid #30363d",
            },
            "&.Mui-focused fieldset": {
                boxShadow: "rgb(80 70 228 / 25%) 0px 0px 0px 0.2rem",
                border: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
            },
        },
    };

    const formHelperStyle = {
        margin: 0,
        backgroundColor: theme === "light" ? "#FAFAFA" : "#0d1117",
    };

    const defaultProps = {
        size: "small",
        fullWidth: true,
        variant: "outlined",
        FormHelperTextProps: {
            sx: formHelperStyle,
        },
    };
    
    return <TextField {...props} {...defaultProps} sx={AuthTextField} />;
}

import { useContext } from "react";
import { TextField } from "@mui/material";
import { ThemeContext } from "../../../../context/ThemeContextProvider";

export default function StyledTextField({ ...props }) {
    const { theme } = useContext(ThemeContext);

    const primaryTextField = {
        backgroundColor: theme === "light" ? "#f6f8fa" : "#0d1117",
        borderRadius: "4px",
        "& .MuiOutlinedInput-root": {
            "& input": {
                fontWeight: 400,
                fontSize: "14px",
                color: theme === "light" ? "#24292f" : "#c9d1d9",
            },
            "& fieldset": {
                borderRadius: "4px",
                border: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
            },
            "&:hover fieldset": {
                border: theme === "light" ? "1px solid #d5d8e1" : "1px solid #30363d",
            },
            "&.Mui-focused fieldset": {
                border: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
            },
            "& .MuiSvgIcon-root": {
                color: theme === "light" ? "#5046e4" : "#8b949e",
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
    return <TextField {...props} {...defaultProps} sx={primaryTextField} />;
}

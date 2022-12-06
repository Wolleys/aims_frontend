import { useContext } from "react";
import { TextField, styled } from "@mui/material";
import { ThemeContext } from "../../../../context/ThemeContextProvider";

export default function StyledSearchTextField({ ...props }) {
    const { theme } = useContext(ThemeContext);

    const SearchTextField = styled(TextField)(() => ({
        background: theme === "light" ? "#f6f8fa" : "#0d1117",
        borderRadius: "4px",
        "& .MuiOutlinedInput-root": {
            "& input": {
                height: "unset",
                fontWeight: 400,
                fontSize: "14px",
                padding: "6px 0 6px 12px",
                color: theme === "light" ? "#24292f" : "#c9d1d9",
                "&::placeholder": {
                    color: theme === "light" ? "#03060b" : "#c9d1d9",
                    fontWeight: 500,
                },
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
                fontSize: "21px",
                color: theme === "light" ? "#ccc" : "#8b949e",
            },
            
        },
    }));

    const defaultProps = {
        size: "small",
        variant: "outlined",
        placeholder: "Search...",
    };

    return <SearchTextField {...defaultProps} {...props} />;
}

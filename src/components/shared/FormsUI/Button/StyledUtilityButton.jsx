import { useContext } from "react";
import { Button } from "@mui/material";
import { ThemeContext } from "../../../../context/ThemeContextProvider";

export default function StyledUtilityButton({ ...props }) {
    const { theme } = useContext(ThemeContext);

    const buttonStyle = {
        ml: 0.5,
        fontSize: 14,
        lineHeight: 1.5,
        boxShadow: "none",
        textTransform: "none",
        color: theme === "light" ? "#24292f" : "#c9d1d9",
        backgroundColor: theme === "light" ? "#FAFAFA" : "#0d1117",
        border: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
        "&:hover": {
            backgroundColor: theme === "light" ? "#FAFAFA" : "#0d1117",
        },
    };

    const defaultProps = {
        sx: buttonStyle,
        size: "small",
        variant: "contained",
        disableElevation: true,
    };
    return <Button {...defaultProps} {...props} />;
}

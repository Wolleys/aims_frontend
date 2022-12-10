import { useContext } from "react";
import { Button, styled } from "@mui/material";
import { ThemeContext } from "../../../../context/ThemeContextProvider";

export default function StyledBackButton({ ...props }) {
    const { theme } = useContext(ThemeContext);

    const BackButton = styled(Button)({
        fontSize: 14,
        lineHeight: 1.5,
        boxShadow: "none",
        textTransform: "none",
        color: theme === "light" ? "#5046e4" : "#c9d1d9",
        backgroundColor: "transparent",
        border: theme === "light" ? "1px solid #5046e4" : "1px solid #30363D",
        "&:hover": {
            backgroundColor: "transparent",
            borderColor: theme === "light" ? "#5046e4" : "#8b949e",
        },
        "&:active": {
            backgroundColor: "transparent",
            borderColor: theme === "light" ? "#5046e4" : "#8b949e",
        },
    });
    return <BackButton {...props} />;
}

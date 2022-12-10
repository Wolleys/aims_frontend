import { useContext } from "react";
import { Button, styled } from "@mui/material";
import { ThemeContext } from "../../../../context/ThemeContextProvider";

export default function StyledButtons({ ...props }) {
    const { theme } = useContext(ThemeContext);

    const PrimaryButton = styled(Button)({
        fontSize: 14,
        lineHeight: 1.5,
        boxShadow: "none",
        textTransform: "none",
        color: theme === "light" ? "#fff" : "#c9d1d9",
        backgroundColor: theme === "light" ? "#5046e4" : "#21262d",
        border: theme === "light" ? "1px solid #5046e4" : "1px solid #f0f6fc1a",
        "&:hover": {
            borderColor: theme === "light" ? "#0969da" : "#8b949e",
            backgroundColor: theme === "light" ? "#0969da" : "#30363D",
        },
        "&:active": {
            borderColor: theme === "light" ? "#5046e4" : "#6e7681",
            backgroundColor: theme === "light" ? "#0969da" : "#282e33",
        },
    });
    return <PrimaryButton {...props} />;
}

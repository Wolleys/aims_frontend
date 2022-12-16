import { useContext } from "react";
import { Typography } from "@mui/material";
import { ThemeContext } from "../../../context/ThemeContextProvider";

function FormHeading({ title, ...props }) {
    const { theme } = useContext(ThemeContext);
    const typoStyle = {
        mb: 2,
        fontWeight: 600,
        fontSize: "16px",
        color: theme === "light" ? "#24292f" : "#c9d1d9",
    }

    return (
        <Typography
            component="p"
            variant="h6"
            gutterBottom
            sx={typoStyle}
            {...props}
        >
            {title}
        </Typography>
    );
}

export default FormHeading;

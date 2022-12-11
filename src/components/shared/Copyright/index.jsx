import { useContext } from "react";
import { Typography, Link } from "@mui/material";
import { ThemeContext } from "../../../context/ThemeContextProvider";

function Copyright(props) {
    const { theme } = useContext(ThemeContext);

    const typoStyle = {
        lineHeight: 1.5,
        fontSize: "12px",
        color: theme === "light" ? "#57606a" : "#8b949e",
    };
    return (
        <Typography align="center" sx={typoStyle} {...props} >
            {"Copyright © "}
            <Link color="inherit" href="https://bizwisetechnologies.co.ke/">
                Bizwise Technologies
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

export default Copyright;

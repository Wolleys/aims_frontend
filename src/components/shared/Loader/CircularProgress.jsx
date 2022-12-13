import { useContext } from "react";
import { CircularProgress } from "@mui/material";
import { ThemeContext } from "../../../context/ThemeContextProvider";

function PrimaryCircularProgress(props) {
    const { size } = props
    const { theme } = useContext(ThemeContext);

    const progressStyle = {
        color: theme === "light" ? "#5046e4" : "#8b949e",
    };

    return <CircularProgress size={size} sx={progressStyle} />;
}

export default PrimaryCircularProgress;

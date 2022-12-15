import { useContext } from "react";
import { Tab } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContextProvider";

function StyledTab({ ...props }) {
    const { theme } = useContext(ThemeContext);

    const tabStyles = {
        textTransform: "none",
        color: theme === "light" ? "#57606a" : "#8b949e",
        "&.Mui-selected": {
            fontWeight: 600,
            color: theme === "light" ? "#0969da" : "#58a6ff",
        },
        "&:hover": {
            color: theme === "light" ? "#0969da" : "#58a6ff",
        },
    };

    const defaultTabProps = {
        wrapped: true,
        sx: tabStyles,
        component: NavLink,
    };

    return <Tab {...defaultTabProps} {...props} />;
}

export default StyledTab;

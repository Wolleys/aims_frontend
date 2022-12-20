import { useContext } from "react";
import { MenuItem } from "@mui/material";
import { ThemeContext } from "../../../../../../context/ThemeContextProvider";

function StyledMenuItem({ children, ...props }) {
    const { theme } = useContext(ThemeContext);

    const menuItemStyle = {
        fontSize: "14px",
        color: theme === "light" ? "#444" : "#c9d1d9",
        "& .MuiSvgIcon-root": {
            fontSize: "17px",
            color: theme === "light" ? "#57606a" : "#8b949e",
        },
        "&:hover": {
            color: theme === "light" ? "#444" : "#fff",
            backgroundColor: theme === "light" ? "#F5F5F5" : "#5046e4",
            "& .MuiSvgIcon-root": {
                color: theme === "light" ? "#5046e4" : "#fff",
            },
        },
        "&.Mui-selected, &.Mui-selected:hover": {
            color: theme === "light" ? "#444" : "#fff",
            backgroundColor: theme === "light" ? "#F5F5F5" : "#5046e4",
        },
    };
    return <MenuItem sx={menuItemStyle} {...props}>{children}</MenuItem>;
}

export default StyledMenuItem;

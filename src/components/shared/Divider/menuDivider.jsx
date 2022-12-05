import { useContext } from "react";
import { Divider } from "@mui/material";
import { ThemeContext } from "../../../context/ThemeContextProvider";

function MenuDivider() {
    const { theme } = useContext(ThemeContext);
    const dividerStyle = {
        borderBottom: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
    };
    return <Divider sx={dividerStyle} />;
}

export default MenuDivider;

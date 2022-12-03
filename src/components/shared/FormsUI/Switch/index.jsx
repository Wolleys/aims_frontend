import { useContext } from "react";
import Switch from "@mui/material/Switch";
import { ThemeContext } from "../../../../context/ThemeContextProvider";

function ThemeSwitch() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <Switch
            size="small"
            checked={theme === "dark"}
            onChange={toggleTheme}
        />
    );
}

export default ThemeSwitch;

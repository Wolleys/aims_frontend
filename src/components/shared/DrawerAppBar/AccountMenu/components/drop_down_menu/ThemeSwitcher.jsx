import { useContext } from "react";
import { ListItemIcon } from "@mui/material";
import StyledMenuItem from "./StyledMenuItem";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { ThemeContext } from "../../../../../../context/ThemeContextProvider";

function ThemeSwitcher() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <StyledMenuItem>
            <ListItemIcon>
                {theme === "light" ? (
                    <DarkModeOutlinedIcon fontSize="small" />
                ) : (
                    <LightModeOutlinedIcon fontSize="small" />
                )}
            </ListItemIcon>
            <input
                type="checkbox"
                id="mode"
                onChange={toggleTheme}
                checked={theme === "dark"}
                style={{ display: "none" }}
            />
            <label htmlFor="mode" style={{ cursor: "pointer" }}>
                {theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            </label>
        </StyledMenuItem>
    );
}
export default ThemeSwitcher;

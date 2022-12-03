import AccountMenu from "./AccountMenu";
import MenuDrawer from "./components/drawer";
import { useState, useContext } from "react";
import MobileLogo from "./components/mobile_logo";
import DesktopLogo from "./components/desktop_logo";
import { AppBar, Box, Toolbar } from "@mui/material";
import DesktopNavMenu from "./components/desktop_nav_menu";
import { ThemeContext } from "../../../context/ThemeContextProvider";

function DrawerAppBar(props) {
    const { window } = props;
    const { theme } = useContext(ThemeContext);
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    const navStyle = {
        backgroundColor: theme === "light" ? "#3e345d" : "#161B22",
        borderBottom: theme === "light" ? "none" : "1px solid #30363d"
    }

    return (
        <Box sx={{ display: "flex" }}>
            <AppBar component="nav" className="app_bar" sx={navStyle} elevation={0}>
                <Toolbar>
                    <DesktopLogo handleDrawerToggle={handleDrawerToggle} />
                    <MobileLogo mobileOpen={mobileOpen} />
                    <DesktopNavMenu />
                    <AccountMenu />
                </Toolbar>
            </AppBar>
            <MenuDrawer handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} window={window} />
        </Box>
    );
}

export default DrawerAppBar;

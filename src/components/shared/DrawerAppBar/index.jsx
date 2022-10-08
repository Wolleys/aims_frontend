import { useState } from 'react';
import AccountMenu from './AccountMenu';
import MenuDrawer from './components/drawer';
import MobileLogo from './components/mobile_logo';
import DesktopLogo from './components/desktop_logo';
import DesktopNavMenu from './components/desktop_nav_menu';
import { AppBar, Box, Toolbar } from "@mui/material";

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" style={{ background: '#3e345d' }}>
                <Toolbar>
                    <DesktopLogo handleDrawerToggle={handleDrawerToggle} />
                    <MobileLogo />
                    <DesktopNavMenu />
                    <AccountMenu />
                </Toolbar>
            </AppBar>
            <MenuDrawer handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} window={window} />
        </Box>
    );
}

export default DrawerAppBar;

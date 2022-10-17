import { useState } from 'react';
import AccountMenu from './AccountMenu';
import MenuDrawer from './components/drawer';
import { useLocation } from "react-router-dom";
import MobileLogo from './components/mobile_logo';
import DesktopLogo from './components/desktop_logo';
import DesktopNavMenu from './components/desktop_nav_menu';
import { AppBar, Box, Toolbar } from "@mui/material";


function DrawerAppBar(props) {
    const { window } = props;
    const { pathname } = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    return (
        <>
            {pathname === "/" ? null :
                <Box sx={{ display: 'flex' }}>
                    <AppBar component="nav" style={{ background: '#3e345d' }} elevation={0}>
                        <Toolbar>
                            <DesktopLogo handleDrawerToggle={handleDrawerToggle} />
                            <MobileLogo mobileOpen={mobileOpen} />
                            <DesktopNavMenu />
                            <AccountMenu />
                        </Toolbar>
                    </AppBar>
                    <MenuDrawer handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} window={window} />
                </Box>
            }
        </>
    );
}

export default DrawerAppBar;

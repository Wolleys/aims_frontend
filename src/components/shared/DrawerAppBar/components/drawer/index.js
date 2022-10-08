import MobileNavMenu from "../mobile_nav_menu";
import { Box, Divider, Typography, Drawer } from "@mui/material";

const drawerWidth = 240;
function MenuDrawer(props) {
    const { handleDrawerToggle, mobileOpen, window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box component="nav">
            <Drawer container={container} variant="temporary" open={mobileOpen} onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true, }}
                sx={{
                    display: { xs: 'block', sm: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}>
                <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ p: 2, background: '#3e345d', color: '#ede7f6' }}> AIMS </Typography>
                    <Divider />
                    <MobileNavMenu />
                </Box>
            </Drawer>
        </Box>
    )
}

export default MenuDrawer
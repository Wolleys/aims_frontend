import React from 'react';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Typography, IconButton } from "@mui/material";

function DesktopLogo(props) {
    const { handleDrawerToggle } = props
    return (
        <>
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { xs: 'block', sm: 'block', md: 'none' } }} >
                <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }, flexGrow: 1, alignItems: 'center' }}>
                <AdbIcon />
                <Typography variant="h6" component="div"  > aims </Typography>
            </Box>
        </>

    )
}

export default DesktopLogo
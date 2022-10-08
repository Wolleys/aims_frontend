import React from 'react';
import AdbIcon from '@mui/icons-material/Adb';
import { Box, Typography } from "@mui/material";

function MobileLogo(props) {
    const { mobileOpen } = props;

    return (
        <Box sx={{
            display: { xs: 'flex', sm: 'flex', md: 'none' }, flexGrow: 1,
            alignItems: 'center', justifyContent: 'center', 
            opacity: mobileOpen ? 0 : 1
        }}>
            <AdbIcon />
            <Typography variant="h6" component="div" > mobile </Typography>
        </Box>
    )
}

export default MobileLogo;
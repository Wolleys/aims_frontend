import React from 'react';
import userAvatar from "../../../../../../assets/imgs/2.jpg";
import { Box, Typography, Tooltip, IconButton, Avatar } from "@mui/material"

function AppBarAvatar(props) {
    const { handleClick, open } = props;
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', flexGrow: 0 }}>
            <Typography sx={{ display: { xs: 'none', sm: 'block', }, ml: 1, color: "#ede7f6", fontSize: "14px", }}>Nolan</Typography>
            <Tooltip title="Account settings">
                <IconButton onClick={handleClick} size="small" sx={{ ml: 0 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined} >
                    <Avatar src={userAvatar} alt="Remy Sharp" />
                </IconButton>
            </Tooltip>
        </Box>
    )
}

export default AppBarAvatar;
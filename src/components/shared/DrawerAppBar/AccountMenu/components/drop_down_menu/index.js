import React from 'react';
import { Link } from "react-router-dom";
import { Settings, Logout } from "@mui/icons-material";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Avatar, Menu, ListItemIcon, Divider, MenuItem } from "@mui/material";

function DropDownMenu(props) {
    const { anchorEl, open, handleClose, } = props;
    return (
        <Menu anchorEl={anchorEl} id="account-menu" open={open} onClose={handleClose} onClick={handleClose}
            PaperProps={{
                elevation: 0, sx: {
                    overflow: 'visible', filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5, '& .MuiAvatar-root': { width: 32, height: 32, ml: -0.5, mr: 1, },
                    '&:before': {
                        content: '""', display: 'block', position: 'absolute', top: 0, right: 14, width: 10,
                        height: 10, bgcolor: 'background.paper', transform: 'translateY(-50%) rotate(45deg)', zIndex: 0,
                    },
                },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <Link to="/profile/overview" style={{ textDecoration: 'none', color: 'inherit' }}>
                <MenuItem sx={{ fontSize: '14px', color: '#444' }}> <Avatar /> My Profile </MenuItem>
            </Link>
            <Link to="/account-settings" style={{ textDecoration: 'none', color: 'inherit' }}>
                <MenuItem sx={{ fontSize: '14px', color: '#444' }}> <Avatar /> Account Settings </MenuItem>
            </Link>
            <Divider />
            <Link to="/access-management/users" style={{ textDecoration: 'none', color: 'inherit' }}>
                <MenuItem sx={{ fontSize: '14px', color: '#444' }}>
                    <ListItemIcon> <AdminPanelSettingsIcon fontSize="small" /> </ListItemIcon>
                    Access Management
                </MenuItem>
            </Link>
            <Link to="/setup/clients" style={{ textDecoration: 'none', color: 'inherit' }}>
                <MenuItem sx={{ fontSize: '14px', color: '#444' }}> <ListItemIcon> <Settings fontSize="small" /> </ListItemIcon>
                    System Setup
                </MenuItem>
            </Link>
            <MenuItem sx={{ fontSize: '14px', color: '#444' }}>
                <ListItemIcon> <Logout fontSize="small" /> </ListItemIcon>
                Logout
            </MenuItem>
        </Menu>
    )
}

export default DropDownMenu
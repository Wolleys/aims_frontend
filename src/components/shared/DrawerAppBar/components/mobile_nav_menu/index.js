import React from 'react';
import { navItems } from '../nav_items';
import { Link, MenuItem, } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";

function MobileNavMenu() {
    return navItems.map(({ label, href }) => {
        return (
            <Link {...{ component: RouterLink, to: href, key: label }} sx={{ textDecoration: 'none', color: "inherit" }} >
                <MenuItem className="header_link">{label}</MenuItem>
            </Link>
        );
    });
}

export default MobileNavMenu;
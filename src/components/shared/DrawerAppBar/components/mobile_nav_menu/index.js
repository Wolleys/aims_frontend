import React, { useState } from 'react';
import { navItems } from '../nav_items';
import { Link, MenuItem, } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";

function MobileNavMenu() {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const handleSelectedIndex = (event, index) => {
        setSelectedIndex(index);
    };

    return navItems.map(({ label, href }, index) => {
        return (
            <Link {...{ component: RouterLink, to: href, key: label }} sx={{ textDecoration: 'none', color: "inherit" }} >
                <MenuItem sx={{ p: 2, fontSize: '14px', }}
                    selected={index === selectedIndex}
                    onClick={(event) => handleSelectedIndex(event, index)}>
                    {label}
                </MenuItem>
            </Link>
        );
    });
}

export default MobileNavMenu;
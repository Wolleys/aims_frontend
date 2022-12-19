import { navItems } from "../nav_items";
import { useContext } from "react";
import { Link, MenuItem } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ThemeContext } from "../../../../../context/ThemeContextProvider";

import DashboardLinks from "../nav_items/dashboardLinks";
import StockLinks from "../nav_items/default/stockLinks";
import PartEntryLinks from "../nav_items/default/partEntryLinks";
import JobsLinks from "../nav_items/default/jobsLinks";
import PartIssueLinks from "../nav_items/default/partIssueLinks";

function MobileNavMenu() {
    const { theme } = useContext(ThemeContext);
    const linkStyle = {
        color: "inherit",
        textDecoration: "none",
    }

    const menuItemStyle = {
        p: 2,
        fontSize: "14px",
        color: theme === "light" ? "#24292f" : "#f0f6fc",
        borderBottom: theme === "light" ? "thin solid #d0d7de" : "thin solid #30363d",
        "& .MuiSvgIcon-root": {
            fontSize: "18px",
            color: theme === "light" ? "#57606a" : "#8b949e",
        },
        "&:hover": {
            color: theme === "light" ? "#444" : "#fff",
            backgroundColor: theme === "light" ? "#F5F5F5" : "#5046e4",
            "& .MuiSvgIcon-root": {
                color: theme === "light" ? "#5046e4" : "#fff",
            },
        },
        "&.Mui-selected, &.Mui-selected:hover": {
            backgroundColor: theme === "light" ? "#F5F5F5" : "#161b22",
        },
    }

    return (
        <>
            {navItems.map(({ label, href, icon }) => {
                return DashboardLinks(label) ?
                <Link {...{ component: RouterLink, to: href, key: label }} sx={linkStyle} >
                    <MenuItem sx={menuItemStyle} selected > {icon} {label} </MenuItem>
                </Link>
                : StockLinks(label) ?
                <Link {...{ component: RouterLink, to: href, key: label }} sx={linkStyle} >
                    <MenuItem sx={menuItemStyle} selected > {icon} {label} </MenuItem>
                </Link>
                : PartEntryLinks(label) ?
                <Link {...{ component: RouterLink, to: href, key: label }} sx={linkStyle} >
                    <MenuItem sx={menuItemStyle} selected > {icon} {label} </MenuItem>
                </Link>
                : JobsLinks(label) ?
                <Link {...{ component: RouterLink, to: href, key: label }} sx={linkStyle} >
                    <MenuItem sx={menuItemStyle} selected > {icon} {label} </MenuItem>
                </Link>
                : PartIssueLinks(label) ?
                <Link {...{ component: RouterLink, to: href, key: label }} sx={linkStyle} >
                    <MenuItem sx={menuItemStyle} selected > {icon} {label} </MenuItem>
                </Link>
                :
                <Link {...{ component: RouterLink, to: href, key: label }} sx={linkStyle} >
                    <MenuItem sx={menuItemStyle} > {icon} {label} </MenuItem>
                </Link>
            })}
        </>
    )
}

export default MobileNavMenu;
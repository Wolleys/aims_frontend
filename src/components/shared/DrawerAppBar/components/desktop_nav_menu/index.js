import React from "react";
import { Box } from "@mui/material";
import { navItems } from "../nav_items";
import { NavLink, useLocation, useParams } from "react-router-dom";

function DesktopNavMenu() {
    const { pathname } = useLocation();
    const { jobId } = useParams();
    const dashboardTabs = (pathname === "/dashboard/sales");
    const jobsLinks = ((pathname === "/jobs/open-job") ||
        (pathname === `/jobs/edit-job/${jobId}`) ||
        (pathname === `/jobs/job-profile/${jobId}`));

    return (
        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }, flexGrow: 1, alignItems: 'center' }} className="nav">
            {navItems.map(({ label, href }) => {
                return (label === 'Dashboard' && dashboardTabs) ?
                    <NavLink {...{ key: label }} to={pathname}>{label}</NavLink>
                    : (label === 'Jobs' && (jobsLinks)) ?
                    <NavLink {...{ key: label }} to={pathname} >{label}</NavLink>
                    : <NavLink {...{ key: label }} to={href}>{label}</NavLink>;
            })}
        </Box>
    )
}

export default DesktopNavMenu;
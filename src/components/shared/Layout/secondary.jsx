import React from "react";
import { Outlet } from "react-router-dom";
import DrawerAppBar from "../DrawerAppBar";
import { Box, Toolbar, Divider } from "@mui/material";

function SecondaryLayout() {
    return (
        <Box component="main" sx={{ p: 3, pt: 0 }}>
            <DrawerAppBar />
            <Toolbar />
            <Box sx={{ pt: 8.4, pb: 3 }}>
                <Divider sx={{ mb: 2, mt: 0 }} />
                <Outlet />
            </Box>
        </Box>
    );
}

export default SecondaryLayout;

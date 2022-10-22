import React from "react";
import { Outlet } from "react-router-dom";
import DrawerAppBar from "../DrawerAppBar";
import { Box, Toolbar, Divider } from "@mui/material";

function PrimaryLayout(props) {
    const { tabs } = props;

    return (
        <Box component="main" sx={{ p: 3, pt: 0 }}>
            <DrawerAppBar />
            <Toolbar />
            <Box sx={{ pt: 0, pb: 3 }}>
                {tabs}
                <Box>
                    <Divider sx={{ mb: 2, mt: 0 }} />
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
}

export default PrimaryLayout;

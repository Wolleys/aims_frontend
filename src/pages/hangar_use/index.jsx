import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Toolbar, Divider } from "@mui/material";
import HangarUseTabs from "../../components/tabs/hangar_use";

function HangarUse() {
    return (
        <Box component="main" sx={{ p: 3, pt:0 }}>
            <Toolbar />
            <Box sx={{ pt: 0, pb: 3 }}>
                <HangarUseTabs />
                <Box>
                    <Divider sx={{ mb: 2, mt: 0 }} />
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
}

export default HangarUse;

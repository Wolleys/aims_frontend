import React from "react";
import { Box, Toolbar, Divider } from "@mui/material";
import DrawerAppBar from "../../../components/shared/DrawerAppBar";

function Jobs() {
    return (
        <Box component="main" sx={{ p: 3, pt:0 }}>
            <DrawerAppBar />
            <Toolbar />
            <Box sx={{ pt: 8.4, pb: 3 }}>
                <Divider sx={{ mb: 2, mt: 0 }} />
                <h1>Jobs Page</h1>
            </Box>
        </Box>
    );
}

export default Jobs;

import React from "react";
import JobsList from "./tables/jobsList";
import { Box, Toolbar, Divider } from "@mui/material";
import DrawerAppBar from "../../../components/shared/DrawerAppBar";

function Jobs() {
    return (
        <Box component="main" sx={{ p: 3, pt:0 }}>
            <DrawerAppBar />
            <Toolbar />
            <Box sx={{ pt: 8.4, pb: 3 }}>
                <Divider sx={{ mb: 2, mt: 0 }} />
                <JobsList />
            </Box>
        </Box>
    );
}

export default Jobs;

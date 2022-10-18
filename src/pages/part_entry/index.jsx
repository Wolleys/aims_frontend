import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Toolbar, Divider } from "@mui/material";
import PartEntryTabs from "../../components/tabs/part_entry";
import DrawerAppBar from "../../components/shared/DrawerAppBar";

function PartEntry() {
  return (
    <Box component="main" sx={{ p: 3, pt:0 }}>
      <DrawerAppBar />
      <Toolbar />
      <Box sx={{ pt: 0, pb: 3 }}>
        <PartEntryTabs />
        <Box>
          <Divider sx={{ mb: 2, mt: 0 }} />
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default PartEntry;

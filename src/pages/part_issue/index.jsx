import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Toolbar, Divider } from "@mui/material";
import PartIssueTabs from "../../components/tabs/part_issue";

function PartIssue() {
  return (
    <Box component="main" sx={{ p: 3 }}>
      <Toolbar />
      <Box sx={{ pt: 0, pb: 3 }}>
        <PartIssueTabs />
        <Box>
          <Divider sx={{ mb: 2, mt: 0 }} />
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default PartIssue;

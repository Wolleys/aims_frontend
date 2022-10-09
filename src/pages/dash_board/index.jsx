import React from "react";
import { Outlet } from "react-router-dom";
import DashboardTabs from "../../components/tabs/dashboard";
import { Box, Toolbar, Divider } from "@mui/material";

function Dashboard() {
  return (
    <Box component="main" sx={{ p: 3, pt:0 }}>
      <Toolbar />
      <Box sx={{ pt: 0, pb: 3 }}>
        <DashboardTabs />
        <Box>
          <Divider sx={{ mb: 2, mt: 0 }} />
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;

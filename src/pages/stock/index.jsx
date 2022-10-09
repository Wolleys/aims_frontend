import React from "react";
import { Outlet } from "react-router-dom";
import StockTabs from "../../components/tabs/stock";
import { Box, Toolbar, Divider } from "@mui/material";

function Stock() {
  return (
    <Box component="main" sx={{ p: 3, pt:0 }}>
      <Toolbar />
      <Box sx={{ pt: 0, pb: 3 }}>
        <StockTabs />
        <Box>
          <Divider sx={{ mb: 2, mt: 0 }} />
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default Stock;

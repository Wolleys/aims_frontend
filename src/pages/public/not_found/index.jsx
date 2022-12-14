import React from "react";
import { Box, Toolbar, Divider } from "@mui/material";

function NotFound() {
  return (
    <Box component="main" sx={{ p: 3, pt: 0 }}>
      <Toolbar />
      <Box sx={{ pt: 8.4, pb: 3 }}>
        <Divider sx={{ mb: 2, mt: 0 }} />
        <h1>Not Found</h1>
      </Box>
    </Box>
  );
}

export default NotFound;

import { Outlet } from "react-router-dom";
import DrawerAppBar from "../DrawerAppBar";
import { Box, Toolbar } from "@mui/material";
import LayoutDivider from "../Divider/layoutDivider";

function SecondaryLayout() {
    return (
        <Box component="main" sx={{ p: 3, pt: 0 }}>
            <DrawerAppBar />
            <Toolbar />
            <Box sx={{ pt: 8.4, pb: 3 }}>
                <LayoutDivider />
                <Outlet />
            </Box>
        </Box>
    );
}

export default SecondaryLayout;

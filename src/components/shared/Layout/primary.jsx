import { Outlet } from "react-router-dom";
import DrawerAppBar from "../DrawerAppBar";
import { Box, Toolbar } from "@mui/material";
import LayoutDivider from "../Divider/layoutDivider";

function PrimaryLayout(props) {
    const { tabs } = props;

    return (
        <Box component="main" sx={{ p: 3, pt: 0 }}>
            <DrawerAppBar />
            <Toolbar />
            <Box sx={{ pt: 0, pb: 3 }}>
                {tabs}
                <Box>
                    <LayoutDivider />
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
}

export default PrimaryLayout;

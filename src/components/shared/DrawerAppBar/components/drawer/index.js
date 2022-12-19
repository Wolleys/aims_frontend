import { useContext } from "react";
import MobileNavMenu from "../mobile_nav_menu";
import { Box, Divider, Typography, Drawer } from "@mui/material";
import { ThemeContext } from "../../../../../context/ThemeContextProvider";

const drawerWidth = 240;
function MenuDrawer(props) {
    const { theme } = useContext(ThemeContext);
    const { handleDrawerToggle, mobileOpen, window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;

    const drawerStyle = {
        "& .MuiDrawer-paper": {
            height: "100%",
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: theme === "light" ? "#FAFAFA" : "#0d1117",
        },
        display: { xs: "block", sm: "block", md: "none" },
    }

    const defaultProps = {
        sx: drawerStyle,
        open:mobileOpen,
        variant:"temporary",
        container: container,
        onClose:handleDrawerToggle,
        ModalProps: {
            keepMounted: true
        },
    }

    const typoStyle = {
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: {xs: "56px", sm: "64px"},
        backgroundColor: theme === "light" ? "#3e345d" : "#161B22",
    }

    return (
        <Box component="nav">
            <Drawer {...defaultProps}>
                <Box onClick={handleDrawerToggle}>
                    <Typography variant="h6" sx={typoStyle}> AIMS </Typography>
                    <Divider />
                    <MobileNavMenu />
                </Box>
            </Drawer>
        </Box>
    )
}

export default MenuDrawer
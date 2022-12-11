import { useContext } from "react";
import AdbIcon from "@mui/icons-material/Adb";
import { ThemeContext } from "../../../context/ThemeContextProvider";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { AppBar, Box, Toolbar, Typography, Container, IconButton } from "@mui/material";

export default function DenseAppBar() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const navStyle = {
        cursor: "default",
        color: theme === "light" ? "#24292f" : "#fff",
        backgroundColor: theme === "light" ? "#FAFAFA" : "#0d1117",
    }

    return (
        <AppBar position="fixed" sx={navStyle} elevation={0}>
            <Container maxWidth="md">
                <Toolbar variant="dense" style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <Box sx={{ display: { xs: "flex" }, flexGrow: 1, alignItems: "center" }}>
                        <AdbIcon style={{ marginLeft: -5 }} />
                        <Typography variant="h6" component="div"  > aims </Typography>
                    </Box>
                    <Box style={{ marginRight: -5 }}>
                        <IconButton onClick={toggleTheme} color="inherit" >
                            {theme === "light" ? <DarkModeOutlinedIcon fontSize="small" />
                                : <LightModeOutlinedIcon fontSize="small" />}
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
import AdbIcon from "@mui/icons-material/Adb";
import { AppBar, Box, Toolbar, Typography, Container, Button } from "@mui/material";

export default function DenseAppBar() {
    return (
        <AppBar position="fixed" sx={{ background: "#0E0E0E", borderBottom: "1px solid #242424" }} elevation={0}>
            <Container fixed>
                <Toolbar variant="dense">
                    <Box sx={{ display: { xs: "flex" }, flexGrow: 1, alignItems: "center" }}>
                        <AdbIcon />
                        <Typography variant="h6" component="div"  > aims </Typography>
                    </Box>
                    <Box>
                        <Button sx={{ textTransform: "none", color: "#999", fontSize: "12px" }}>Sign In</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContextProvider";
import { Box, CircularProgress, Backdrop, Typography, Stack } from "@mui/material";

function Loader() {
    const { theme } = useContext(ThemeContext);

    const backdropStyle = {
        position: "absolute",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        color: theme === "light" ? "#5046e4" : "#8b949e",
        backgroundColor: theme === "light" ? "#FAFAFA" : "#0d1117",
    }
    return (
        <Box >
            <Backdrop open sx={backdropStyle} >
                <Stack gap={1} justifyContent="center" alignItems="center">
                    <CircularProgress size={20} color="inherit" />
                    <Typography>Loading...</Typography>
                </Stack>
            </Backdrop>
        </Box>
    );
}

export default Loader;

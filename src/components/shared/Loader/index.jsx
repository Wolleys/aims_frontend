import { Box, CircularProgress, Backdrop, Typography, Stack } from "@mui/material";

function Loader() {
    const backdropStyle = {
        color: "#5046e4",
        position: "absolute",
        backgroundColor: "#FAFAFA",
        zIndex: (theme) => theme.zIndex.drawer + 1,
    }
    return (
        <Box >
            <Backdrop open sx={backdropStyle} >
                <Stack gap={1} justifyContent="center" alignItems="center">
                    <CircularProgress size={26} color="inherit" />
                    <Typography>Loading...</Typography>
                </Stack>
            </Backdrop>
        </Box>
    );
}

export default Loader;

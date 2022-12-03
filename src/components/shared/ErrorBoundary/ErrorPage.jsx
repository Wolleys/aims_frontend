import DenseAppBar from "./AppBar";
import { Box, Typography, Stack, Button } from "@mui/material";

function ErrorPage() {
    const boxStyle = {
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0E0E0E",
    };

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <>
            <DenseAppBar />
            <Box sx={boxStyle}>
                <Stack gap={1} justifyContent="center" alignItems="center">
                    <Typography sx={{ fontSize: "24px", color: "#fdfdfd", lineHeight: "normal", mb: 0 }}>
                        Something went wrong
                    </Typography>
                    <Typography component="p" variant="body1" sx={{ color: "#999", fontSize: "16px", lineHeight: "normal" }}>
                        Can't render page. Please try again
                    </Typography>
                    <Button variant="outlined" onClick={refreshPage}
                        sx={{ textTransform: "none", mt: 1 }}>Reload</Button>
                </Stack>
            </Box>
        </>
    );
}

export default ErrorPage;

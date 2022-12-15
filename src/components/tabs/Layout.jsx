import { Box, Container } from "@mui/material";

function Layout({ children }) {
    return (
        <Container maxWidth="fixed">
            <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                {children}
            </Box>
        </Container>
    );
}

export default Layout;

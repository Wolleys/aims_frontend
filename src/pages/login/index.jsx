import React from "react";
import SignIn from "./form";
import Features from "../../components/shared/Features";
import { Box, Container, Grid, CssBaseline, Paper } from "@mui/material";

function Login() {
    return (
        <Box component="main" sx={{ p: 0 }}>
            <Container maxWidth="md">
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid item xs={false} md={6} sx={{ pr: 4 }}>
                        <Features />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} component={Paper} elevation={0} square>
                        <SignIn />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Login;
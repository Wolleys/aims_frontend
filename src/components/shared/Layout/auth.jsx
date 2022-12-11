import React from "react";
import Features from "../../../components/shared/Features";
import { Box, Container, Grid, CssBaseline } from "@mui/material";

function AuthLayout(props) {
    const { form } = props;
    return (
        <Box component="main" sx={{ p: 0 }}>
            <Container maxWidth="md">
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid item xs={false} md={6} sx={{ pr: 4 }}>
                        <Features />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} elevation={0} >
                        {form}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default AuthLayout;

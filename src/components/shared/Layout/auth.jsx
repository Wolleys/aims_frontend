import { useContext } from "react";
import DenseAppBar from "./AppBar";
import Features from "../../../components/shared/Features";
import { ThemeContext } from "../../../context/ThemeContextProvider";
import { Box, Container, Grid, CssBaseline, Typography } from "@mui/material";

function AuthLayout(props) {
    const { form, header } = props;
    const { theme } = useContext(ThemeContext);

    const headingTypoStyle = {
        mb: 2,
        fontWeight: 600,
        lineHeight: 1.5,
        color: theme === "light" ? "#24292f" : "#c9d1d9",
    }
    return (
        <Box component="main" sx={{ p: 0 }}>
            <DenseAppBar />
            <Container maxWidth="md">
                <Grid container component="main" sx={{ height: "100vh" }}>
                    <CssBaseline />
                    <Grid item xs={false} md={6} sx={{ pr: 4 }}>
                        <Features />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} elevation={0} >
                        <Box component="main" maxWidth="sm" sx={{ mb: 4, mt: 20 }}>
                            <Box sx={{ my: 8, mx: 0, display: "flex", flexDirection: "column", alignItems: "left", }} >
                                <Grid container>
                                    <Grid item xs >
                                        <Typography component="h4" variant="h5" sx={headingTypoStyle} > {header} </Typography>
                                    </Grid>
                                </Grid>
                                <Box sx={{ mt: 1 }}>
                                    {form}
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default AuthLayout;

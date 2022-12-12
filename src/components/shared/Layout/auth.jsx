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
                <Grid container sx={{ height: "100vh", pt: "48px" }}>
                    <CssBaseline />
                    <Grid item xs={0} sm={0} md={6} sx={{
                        pr: 4,
                        display: { xs: "none", sm: "none", md: "grid" },
                    }}>
                        <Box>
                            <Features />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} sx={{
                        display: { xs: "grid", sm: "grid", md: "grid" }
                    }} >
                        <Box maxWidth="md" sx={{ mt: 17 }}>
                            <Grid container>
                                <Grid item  >
                                    <Typography component="h4" variant="h5" sx={headingTypoStyle} > {header} </Typography>
                                </Grid>
                            </Grid>
                            <Box sx={{ mt: 1 }}>
                                {form}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default AuthLayout;

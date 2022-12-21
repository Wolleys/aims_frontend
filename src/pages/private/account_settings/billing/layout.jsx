import { Container, Grid } from "@mui/material";

function Layout() {
    return (
        <Container sx={{height: "500px", background: "red"}}>
            <Grid container spacing={2}  >
                <Grid item md={3} sx={{
                    display: { xs: "none", sm: "none", md: "grid" }
                }} >
                    Info card
                </Grid>
                <Grid item xs={12} md={9} sx={{
                    display: { xs: "grid", sm: "grid", md: "grid"}
                }} >
                    Details
                </Grid>
            </Grid>
        </Container>
    );
}

export default Layout;

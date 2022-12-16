import { Box, Grid } from "@mui/material";
import { companyProfile } from "./companyProfile";
import ProfileCard from "../../../../components/shared/Cards/profileCard";

function Layout() {
    return (
        <Box>
            <Grid container spacing={2}  >
                <Grid item md={3}
                    sx={{
                        display: { xs: "none", sm: "none", md: "grid" }
                    }} >
                    <ProfileCard data={companyProfile} />
                </Grid>
                <Grid
                    item md={9}
                    sx={{
                        display: { xs: "grid", sm: "grid", md: "flex", flexDirection: "column" }
                    }} >
                    About company
                </Grid>
            </Grid>
        </Box>
    );
}

export default Layout;

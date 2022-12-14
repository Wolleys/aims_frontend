import CardLabels from "./cardLabels";
import { Box, Grid } from "@mui/material";
import CurrentPlanCard from "./currentPlanCard";
import RecentActivities from "./recentActivities";


function Layout() {
    return (
        <>
            <Box>
                <CardLabels />
                <Grid container spacing={3} sx={{ mt: 1 }} >
                    <Grid item xs={12} md={9} sx={{
                        display: { xs: "grid", sm: "grid", md: "grid" }
                    }} >
                        <RecentActivities />
                    </Grid>
                    <Grid item md={3} sx={{
                        display: { xs: "none", sm: "none", md: "grid" }
                    }} >
                        <CurrentPlanCard />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Layout;

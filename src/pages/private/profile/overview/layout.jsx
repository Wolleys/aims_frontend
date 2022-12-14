import CardLabels from "./cardLabels";
import { Box, Grid } from "@mui/material";
import RecentActivities from "./recentActivities";

function Layout() {
    return (
        <>
            <Box>
                <CardLabels />
                <Grid container spacing={3} sx={{ mt: 1 }} >
                    <Grid item xs={12} sm={8} md={9} >
                        <RecentActivities />
                    </Grid>
                    <Grid item xs={12} sm={4} md={3} >
                        SubscriptionPlanCard
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Layout;

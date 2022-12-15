import CardLabels from "./cardLabels";
import { Box, Grid } from "@mui/material";
import RecentActivities from "./recentActivities";
import SwipeableEdgeDrawer from "../../../../components/shared/Drawer";
import CurrentPlanCard from "../../../../components/shared/Cards/currentPlanCard";

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
                    <Box sx={{
                        display: { xs: "grid", sm: "grid", md: "none" }
                    }}>
                        <SwipeableEdgeDrawer title="Current Plan" content={<CurrentPlanCard />} />
                    </Box>
                </Grid>
            </Box>
        </>
    );
}

export default Layout;

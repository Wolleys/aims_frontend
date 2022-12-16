import CardLabels from "./cardLabels";
import { Box, Grid } from "@mui/material";
import { currentPlan } from "./currentPlan";
import RecentActivities from "./recentActivities";
import InfoCard from "../../../../components/shared/Cards/InfoCard";
import SwipeableEdgeDrawer from "../../../../components/shared/Drawer";

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
                        <InfoCard header data={currentPlan} />
                    </Grid>
                    <Box sx={{
                        display: { xs: "grid", sm: "grid", md: "none" }
                    }}>
                        <SwipeableEdgeDrawer title="Current Plan" content={<InfoCard header data={currentPlan} />} />
                    </Box>
                </Grid>
            </Box>
        </>
    );
}

export default Layout;

import { Box, Grid } from "@mui/material";
import DetailsPanel from "./detailsPanel";
import { companyProfile } from "./companyProfile";
import InfoCard from "../../../../components/shared/Cards/InfoCard";
import SwipeableEdgeDrawer from "../../../../components/shared/Drawer";
// import ProfileCard from "../../../../components/shared/Cards/profileCard";

function Layout() {
    return (
        <Box>
            <Grid container spacing={2}  >
                <Grid item md={3} sx={{
                    display: { xs: "none", sm: "none", md: "grid" }
                }} >
                    <InfoCard data={companyProfile} />
                </Grid>
                <Grid item xs={12} md={9} sx={{
                    display: { xs: "grid", sm: "grid", md: "grid"}
                }} >
                    <DetailsPanel />
                </Grid>
                <Box sx={{
                    display: { xs: "grid", sm: "grid", md: "none" }
                }}>
                    <SwipeableEdgeDrawer title="Company Profile" content={<InfoCard data={companyProfile} />} />
                </Box>
            </Grid>
        </Box>
    );
}

export default Layout;

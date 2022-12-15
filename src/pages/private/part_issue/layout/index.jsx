import JobContainer from "./jobContainer";
import { Box, Grid } from "@mui/material";
import IssueContent from "../tables/default/content";
import SwipeableEdgeDrawer from "../../../../components/shared/Drawer";

function Layout() {
    return (
        <Box>
            <Grid container spacing={2} sx={{ mt: -2 }} >
                <Grid item md={3}
                    sx={{
                        display: { xs: "none", sm: "none", md: "grid" }
                    }} >
                    <JobContainer />
                </Grid>
                <Grid
                    item md={9}
                    sx={{
                        display: { xs: "grid", sm: "grid", md: "grid" }
                    }} >
                    <IssueContent />
                </Grid>
                <Box sx={{
                    display: { xs: "grid", sm: "grid", md: "none" }
                }}>
                    <SwipeableEdgeDrawer title="Jobs List" content={<JobContainer />} />
                </Box>
            </Grid>
        </Box>
    );
};
export default Layout;

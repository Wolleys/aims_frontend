import PlanFeatures from "./plan_features";
import CompanyBilling from "./companyBilling";
import { currentPlan } from "../../data/currentPlan";
import { Container, Grid, Box } from "@mui/material";
import InfoCard from "../../../../components/shared/Cards/InfoCard";
import SwipeableEdgeDrawer from "../../../../components/shared/Drawer";

function Layout() {
    const gridLayoutStyles = {
        rowSpacing: 0,
        container: true,
        columnSpacing:{ 
            xs: 0, sm: 0, md: 2 
        },
        sx:{mt: 1, }
    }
    return (
        <Container>
            <Grid {...gridLayoutStyles} >
                <Grid item md={3} sx={{
                    marginBottom: "auto",
                    display: { xs: "none", sm: "none", md: "grid" }
                }} >
                    <InfoCard header data={currentPlan} />
                </Grid>
                <Grid item xs={12} md={9} sx={{
                    display: { xs: "grid", sm: "grid", md: "flex"},
                    flexDirection: "column"
                }} >
                    <CompanyBilling />
                    <PlanFeatures />
                </Grid>
                <Box sx={{
                    display: { xs: "grid", sm: "grid", md: "none" }
                }}>
                    <SwipeableEdgeDrawer title="Current Plan" content={<InfoCard header data={currentPlan} />} />
                </Box>
            </Grid>
        </Container>
    );
}

export default Layout;

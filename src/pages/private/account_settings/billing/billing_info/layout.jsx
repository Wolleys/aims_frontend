import BillingInfo from "./billingInfo";
import CompanyBilling from "../companyBilling";
import { Container, Grid, Box } from "@mui/material";
import { currentPlan } from "../../../data/currentPlan";
import InfoCard from "../../../../../components/shared/Cards/InfoCard";
import SwipeableEdgeDrawer from "../../../../../components/shared/Drawer";

function Layout() {
    const gridLayoutStyles = {
        rowSpacing: 0,
        container: true,
        columnSpacing: {
            xs: 0, sm: 0, md: 3
        },
        sx: { mt: 1, }
    }
    const containerStyles = {
        padding: {
            xs: 0, sm: "0 24px"
        }
    }

    return (
        <Container sx={containerStyles} >
            <Grid {...gridLayoutStyles} >
                <Grid item md={3} sx={{
                    marginBottom: "auto",
                    display: { xs: "none", sm: "none", md: "grid" }
                }} >
                    <InfoCard header data={currentPlan} />
                </Grid>
                <Grid item xs={12} md={9} sx={{
                    display: { xs: "grid", sm: "grid", md: "flex" },
                    flexDirection: "column"
                }} >
                    <CompanyBilling />
                    <BillingInfo />
                    <Box sx={{ mb: 1 }} > &nbsp;</Box>
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

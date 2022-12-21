import { currentPlan } from "./currentPlan";
import { Container, Grid } from "@mui/material";
import CompanyBilling from "./companyBilling";
import InfoCard from "../../../../components/shared/Cards/InfoCard";

function Layout() {
    return (
        <Container sx={{height: "500px",}}>
            <Grid container spacing={3}  >
                <Grid item md={3} sx={{
                    display: { xs: "none", sm: "none", md: "grid" }
                }} >
                    <InfoCard header data={currentPlan} />
                </Grid>
                <Grid item xs={12} md={9} sx={{
                    display: { xs: "grid", sm: "grid", md: "grid"}
                }} >
                    <CompanyBilling />
                </Grid>
            </Grid>
        </Container>
    );
}

export default Layout;

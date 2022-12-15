import JobCard from "../jobCard";
import { Box, Grid } from "@mui/material";
import IssueList from "../tables/issueList";
import { jobs } from "../../../../data/jobs";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SwipeableEdgeDrawer from "../../../../../../components/shared/Drawer";
import BackBtn from "../../../../../../components/shared/FormsUI/Button/BackBtn";
import SecondaryDivider from "../../../../../../components/shared/Divider/secondaryDivider";

function Layout(props) {
    const { jobId } = props;
    const details = jobs.filter((job) => job.id === parseInt(jobId));

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    return (
        <Box>
            {details.map((item) => (
                <Grid key={item.id} container spacing={2}  >
                    <Grid item md={3}
                        sx={{
                            display: { xs: "none", sm: "none", md: "grid" }
                        }} >
                        <JobCard item={item} />
                    </Grid>
                    <Grid
                        item md={9}
                        sx={{
                            display: { xs: "grid", sm: "grid", md: "flex", flexDirection: "column" }
                        }} >
                        <IssueList item={item} jobId={jobId} />
                    </Grid>
                    <Box sx={{
                        display: { xs: "grid", sm: "grid", md: "none" }
                    }}>
                        <SwipeableEdgeDrawer title="Job Card" content={<JobCard item={item} />} />
                    </Box>
                    <Grid item xs={12} sm={12} sx={{ mt: 1 }}>
                        <BackBtn startIcon={<ArrowBackIcon />} onClick={goBack} >Back </BackBtn>
                    </Grid>
                </Grid>
            ))}
            <SecondaryDivider />
        </Box>
    );
}

export default Layout;

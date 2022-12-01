import JobCard from "../jobCard";
import IssueList from "../tables/issueList";
import { jobs } from "../../../../data/jobs";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Divider } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BackBtn from "../../../../../../components/shared/FormsUI/Button/BackBtn";

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
                    <Grid item xs={12} sm={12} sx={{ mt: 1 }}>
                        <BackBtn startIcon={<ArrowBackIcon />} onClick={goBack} >Back </BackBtn>
                    </Grid>
                </Grid>
            ))}
            <Divider sx={{ mt: 3, }} />
        </Box>
    );
}

export default Layout;

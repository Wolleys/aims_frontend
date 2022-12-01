import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Typography, Container, Grid, Divider } from "@mui/material";
import BackBtn from "../../../../../components/shared/FormsUI/Button/BackBtn";
import ActionBtn from "../../../../../components/shared/FormsUI/Button/ActionBtn";
import NormalTextField from "../../../../../components/shared/FormsUI/TextField/Normal";

function JobDetails(props) {
    const { editRow } = props;
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    return (
        <>
            <Container>
                <Typography component="p" variant="h6" gutterBottom sx={{ fontSize: '16px', fontWeight: 600, mb: 2 }}>
                    Job Details
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={6} md={4}>
                        <label className="primary_label">Date opened</label>
                        <NormalTextField InputProps={{ readOnly: true }} />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4}>
                        <label className="primary_label">Job number</label>
                        <NormalTextField InputProps={{ readOnly: true, }} />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4}>
                        <label className="primary_label">Aircraft registration</label>
                        <NormalTextField InputProps={{ readOnly: true, }} />
                    </Grid>

                    <Grid item xs={6} sm={6} md={4}>
                        <label className="primary_label">Aircraft type</label>
                        <NormalTextField InputProps={{ readOnly: true, }} />
                    </Grid>
                    <Grid item xs={12} sm={12} sx={{ mt: 0 }}>
                        <BackBtn startIcon={<ArrowBackIcon />} onClick={goBack} >Back </BackBtn>
                        <ActionBtn sx={{ float: "right" }} onClick={() => { editRow() }} > Edit </ActionBtn>
                    </Grid>
                </Grid>
            </Container>
            <Divider sx={{ mt: 2, mb: 2 }} />
        </>
    );
}

export default JobDetails;

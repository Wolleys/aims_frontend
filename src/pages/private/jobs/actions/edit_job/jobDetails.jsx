import { useNavigate } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BackBtn from "../../../../../components/shared/FormsUI/Button/BackBtn";
import ActionBtn from "../../../../../components/shared/FormsUI/Button/ActionBtn";
import FormHeading from "../../../../../components/shared/Typography/FormHeading";
import NormalTextField from "../../../../../components/shared/FormsUI/TextField/Normal";
import SecondaryDivider from "../../../../../components/shared/Divider/secondaryDivider";

function JobDetails(props) {
    const { editRow } = props;
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    return (
        <>
            <Container>
                <FormHeading title="Job Details" />
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
            <SecondaryDivider />
        </>
    );
}

export default JobDetails;

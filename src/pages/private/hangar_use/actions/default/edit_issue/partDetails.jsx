import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Typography, Container, Grid, Divider } from "@mui/material";
import BackBtn from "../../../../../../components/shared/FormsUI/Button/BackBtn";
import ActionBtn from "../../../../../../components/shared/FormsUI/Button/ActionBtn";
import NormalTextField from "../../../../../../components/shared/FormsUI/TextField/Normal";

function PartDetails(props) {
    const { editRow } = props;
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    return (
        <>
            <Container>
                <Typography component="p" variant="h6" gutterBottom sx={{ fontSize: '16px', fontWeight: 600, mb: 2 }}>
                    Issued Part Details
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={4} md={3}>
                        <label className="primary_label">Date of issue</label>
                        <NormalTextField InputProps={{ readOnly: true, }} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <label className="primary_label">Description</label>
                        <NormalTextField InputProps={{ readOnly: true, }} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <label className="primary_label">Part number</label>
                        <NormalTextField InputProps={{ readOnly: true, }} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <label className="primary_label">Serial number</label>
                        <NormalTextField InputProps={{ readOnly: true, }} />
                    </Grid>

                    <Grid item xs={6} sm={4} md={3}>
                        <label className="primary_label">Part status</label>
                        <NormalTextField InputProps={{ readOnly: true, }} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <label className="primary_label">Quantity issued</label>
                        <NormalTextField InputProps={{ readOnly: true, }} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <label className="primary_label">Unit selling price</label>
                        <NormalTextField InputProps={{ readOnly: true, }} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <label className="primary_label">Issued to</label>
                        <NormalTextField InputProps={{ readOnly: true, }} />
                    </Grid>

                    <Grid item xs={12} sm={12} sx={{ mt: 0 }}>
                        <BackBtn startIcon={<ArrowBackIcon />} onClick={goBack} >Back </BackBtn>
                        <ActionBtn sx={{ float: "right", }} onClick={() => { editRow() }}> Edit </ActionBtn>
                    </Grid>
                </Grid>
            </Container>
            <Divider sx={{ mt: 2, mb: 2 }} />
        </>
    );
}

export default PartDetails;

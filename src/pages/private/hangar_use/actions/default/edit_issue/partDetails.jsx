import { useNavigate } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BackBtn from "../../../../../../components/shared/FormsUI/Button/BackBtn";
import FormHeading from "../../../../../../components/shared/Typography/FormHeading";
import ActionBtn from "../../../../../../components/shared/FormsUI/Button/ActionBtn";
import NormalTextField from "../../../../../../components/shared/FormsUI/TextField/Normal";
import SecondaryDivider from "../../../../../../components/shared/Divider/secondaryDivider";

function PartDetails(props) {
    const { editRow } = props;
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    return (
        <>
            <Container>
                <FormHeading title="Issued Part Details" />
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
            <SecondaryDivider />
        </>
    );
}

export default PartDetails;

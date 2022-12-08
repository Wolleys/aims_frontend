import { useNavigate } from "react-router-dom";
import { Container, Grid, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BackBtn from "../../../../../../../components/shared/FormsUI/Button/BackBtn";
import FormHeading from "../../../../../../../components/shared/Typography/FormHeading";
import ActionBtn from "../../../../../../../components/shared/FormsUI/Button/ActionBtn";
import NormalTextField from "../../../../../../../components/shared/FormsUI/TextField/Normal";
import SecondaryDivider from "../../../../../../../components/shared/Divider/secondaryDivider";

function PurchaseDetails(props) {
    const { editRow } = props;
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    return (
        <>
            <Container>
                <FormHeading title="Purchase Details" />
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={4} md={3}>
                        <label className="primary_label">Date of purchase</label>
                        <NormalTextField InputProps={{ readOnly: true, }} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <label className="primary_label">Quantity received</label>
                        <NormalTextField InputProps={{ readOnly: true, }} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <label className="primary_label">Part status</label>
                        <NormalTextField InputProps={{ readOnly: true, }} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} sx={{ display: "flex" }}>
                        <Box sx={{ width: "50%", marginRight: "-1px", zIndex: 1 }}>
                            <label className="primary_label">Shelf life</label>
                            <NormalTextField InputProps={{ readOnly: true, }} />
                        </Box>
                        <Box sx={{ width: "50%" }}>
                            <label className="primary_label">Duration</label>
                            <NormalTextField InputProps={{ readOnly: true, }} />
                        </Box>
                    </Grid>

                    <Grid item xs={6} sm={4} md={3}>
                        <label className="primary_label">Expiry Date</label>
                        <NormalTextField InputProps={{ readOnly: true, }} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <label className="primary_label">Buying price ($)</label>
                        <NormalTextField InputProps={{ readOnly: true, }} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <label className="primary_label">BP (local currency)</label>
                        <NormalTextField InputProps={{ readOnly: true, }} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <label className="primary_label">Selling price ($)</label>
                        <NormalTextField InputProps={{ readOnly: true, }} />
                    </Grid>

                    <Grid item xs={12} sm={12} sx={{ mt: 0 }}>
                        <BackBtn startIcon={<ArrowBackIcon />} onClick={goBack} >Back </BackBtn>
                        <ActionBtn sx={{ float: "right", }} onClick={() => { editRow() }} > Edit </ActionBtn>
                    </Grid>
                </Grid>
            </Container>
            <SecondaryDivider />
        </>);
}

export default PurchaseDetails;

import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BackBtn from "../../../../../components/shared/FormsUI/Button/BackBtn";
import ActionBtn from "../../../../../components/shared/FormsUI/Button/ActionBtn";
import NormalTextField from "../../../../../components/shared/FormsUI/TextField/Normal";
import SecondaryDivider from "../../../../../components/shared/Divider/secondaryDivider";

function CompanyDetails(props) {
    const { editRow } = props;
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={6}>
                    <label className="primary_label">First name</label>
                    <NormalTextField InputProps={{ readOnly: true }} />
                </Grid>
                <Grid item xs={6} sm={6}>
                    <label className="primary_label">Last name</label>
                    <NormalTextField InputProps={{ readOnly: true, }} />
                </Grid>

                <Grid item xs={6} sm={6}>
                    <label className="primary_label">Address line 1 </label>
                    <NormalTextField InputProps={{ readOnly: true, }} />
                </Grid>
                <Grid item xs={6} sm={6}>
                    <label className="primary_label">Address line 2 </label>
                    <NormalTextField InputProps={{ readOnly: true, }} />
                </Grid>

                <Grid item xs={6} sm={6}>
                    <label className="primary_label">City </label>
                    <NormalTextField InputProps={{ readOnly: true, }} />
                </Grid>
                <Grid item xs={6} sm={6}>
                    <label className="primary_label">Zip/Postal code </label>
                    <NormalTextField InputProps={{ readOnly: true, }} />
                </Grid>

                <Grid item xs={6} sm={6}>
                    <label className="primary_label">Country </label>
                    <NormalTextField InputProps={{ readOnly: true, }} />
                </Grid>
                <Grid item xs={6} sm={6}>
                    <label className="primary_label">State/Province/Region </label>
                    <NormalTextField InputProps={{ readOnly: true, }} />
                </Grid>

                <Grid item xs={12} sm={12} sx={{ mt: 0 }}>
                    <BackBtn startIcon={<ArrowBackIcon />} onClick={goBack} >Back </BackBtn>
                    <ActionBtn sx={{ float: "right" }} onClick={() => { editRow() }} > Edit </ActionBtn>
                </Grid>
            </Grid>
            <SecondaryDivider />
        </>
    )
}

export default CompanyDetails;

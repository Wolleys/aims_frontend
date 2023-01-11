import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BackBtn from "../../../../../../components/shared/FormsUI/Button/BackBtn";
import ActionBtn from "../../../../../../components/shared/FormsUI/Button/ActionBtn";
import NormalTextField from "../../../../../../components/shared/FormsUI/TextField/Normal";

function Cardetails(props) {
    const { editRow } = props;
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={6} sm={6}>
                <label className="primary_label">Card holder's name</label>
                <NormalTextField InputProps={{ readOnly: true }} />
            </Grid>
            <Grid item xs={6} sm={6}>
                <label className="primary_label">Card number</label>
                <NormalTextField InputProps={{ readOnly: true, }} />
            </Grid>

            <Grid item xs={6} sm={4}>
                <label className="primary_label">Card exp. date</label>
                <NormalTextField InputProps={{ readOnly: true, }} />
            </Grid>
            <Grid item xs={6} sm={4}>
                <label className="primary_label">&nbsp;</label>
                <NormalTextField InputProps={{ readOnly: true, }} />
            </Grid>
            <Grid item xs={6} sm={4}>
                <label className="primary_label">CVV</label>
                <NormalTextField InputProps={{ readOnly: true, }} />
            </Grid>

            <Grid item xs={12} sm={12} sx={{ mt: 0 }}>
                <BackBtn startIcon={<ArrowBackIcon />} onClick={goBack} >Back </BackBtn>
                <ActionBtn sx={{ float: "right" }} onClick={() => { editRow() }} > Edit </ActionBtn>
            </Grid>
        </Grid>
    )
}

export default Cardetails
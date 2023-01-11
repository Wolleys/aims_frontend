import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BackBtn from "../../../../../../components/shared/FormsUI/Button/BackBtn";
import ActionBtn from "../../../../../../components/shared/FormsUI/Button/ActionBtn";
import NormalTextField from "../../../../../../components/shared/FormsUI/TextField/Normal";

function MobileNumDetails(props) {
  const { editInfo } = props;
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12}>
        <label className="primary_label">Phone number</label>
        <NormalTextField InputProps={{ readOnly: true }} />
      </Grid>

      <Grid item xs={12} sm={12} sx={{ mt: 0 }}>
        <BackBtn startIcon={<ArrowBackIcon />} onClick={goBack} >Back </BackBtn>
        <ActionBtn sx={{ float: "right" }} onClick={() => { editInfo() }} > Edit </ActionBtn>
      </Grid>
    </Grid>
  )
}

export default MobileNumDetails;

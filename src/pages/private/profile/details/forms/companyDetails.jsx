import { Grid, Container } from "@mui/material";
import ActionBtn from "../../../../../components/shared/FormsUI/Button/ActionBtn";
import FormHeading from "../../../../../components/shared/Typography/FormHeading";
import NormalTextField from "../../../../../components/shared/FormsUI/TextField/Normal";
import SecondaryDivider from "../../../../../components/shared/Divider/secondaryDivider";

const CompanyDetails = (props) => {
    const { editRow } = props;
    const inputPropsStyle = {
        readOnly: true,
    }

    return (
        <Container sx={{ mt: 1, p: 0 }}>
            <FormHeading title="About Company" />
            <Grid container spacing={2}>
                <Grid item xs={6} sm={4}>
                    <label className="primary_label">First name</label>
                    <NormalTextField InputProps={inputPropsStyle} />
                </Grid>
                <Grid item xs={6} sm={4}>
                    <label className="primary_label">Last name</label>
                    <NormalTextField InputProps={inputPropsStyle} />
                </Grid>
                <Grid item xs={6} sm={4}>
                    <label className="primary_label">User name</label>
                    <NormalTextField InputProps={inputPropsStyle} />
                </Grid>

                <Grid item xs={6} sm={4}>
                    <label className="primary_label">Company name</label>
                    <NormalTextField InputProps={inputPropsStyle} />
                </Grid>
                <Grid item xs={6} sm={4}>
                    <label className="primary_label">Phone number</label>
                    <NormalTextField InputProps={inputPropsStyle} />
                </Grid>
                <Grid item xs={6} sm={4}>
                    <label className="primary_label">Website</label>
                    <NormalTextField InputProps={inputPropsStyle} />
                </Grid>
            </Grid>

            <FormHeading title="Company address" style={{ marginTop: "10px" }} />
            <Grid container spacing={2}>
                <Grid item xs={6} sm={4}>
                    <label className="primary_label">Address line 1</label>
                    <NormalTextField InputProps={inputPropsStyle} />
                </Grid>
                <Grid item xs={6} sm={4}>
                    <label className="primary_label">Address line 2</label>
                    <NormalTextField InputProps={inputPropsStyle} />
                </Grid>
                <Grid item xs={6} sm={4}>
                    <label className="primary_label">City</label>
                    <NormalTextField InputProps={inputPropsStyle} />
                </Grid>

                <Grid item xs={6} sm={4}>
                    <label className="primary_label">State/Province/Region</label>
                    <NormalTextField InputProps={inputPropsStyle} />
                </Grid>
                <Grid item xs={6} sm={4}>
                    <label className="primary_label">Zip/Postal code</label>
                    <NormalTextField InputProps={inputPropsStyle} />
                </Grid>
                <Grid item xs={6} sm={4}>
                    <label className="primary_label">Country</label>
                    <NormalTextField InputProps={inputPropsStyle} />
                </Grid>

                <Grid item xs={12} sm={12} sx={{ mt: 0 }}>
                    <ActionBtn sx={{ float: "right", }} onClick={() => { editRow() }}> Edit </ActionBtn>
                </Grid>

            </Grid>
            <SecondaryDivider />
        </Container>
    );
};

export default CompanyDetails;

import { Formik, Form } from "formik";
import { Grid, Button } from "@mui/material";
import { initialValues } from "../../../form_data/companyData";
import TextField from "../../../../../components/shared/FormsUI/TextField";
import { billingInfoSchema } from "../../../../../validations/billingInfoSchema";
import SubmitBtn from "../../../../../components/shared/FormsUI/Button/SubmitBtn";
import SecondaryDivider from "../../../../../components/shared/Divider/secondaryDivider";

function BillingInfoForm(props) {
    const { setEditing } = props;

    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <>
            <Formik initialValues={{ ...initialValues }} validationSchema={billingInfoSchema} onSubmit={onSubmit}>
                <Form autoComplete="off">
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={6}>
                            <label className="primary_label">First name</label>
                            <TextField name="first_name" />
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <label className="primary_label">Last name</label>
                            <TextField name="last_name" />
                        </Grid>

                        <Grid item xs={6} sm={6}>
                            <label className="primary_label">Address line 1</label>
                            <TextField name="address_line_1" />
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <label className="primary_label">Address line 2</label>
                            <TextField name="address_line_2" />
                        </Grid>

                        <Grid item xs={6} sm={6}>
                            <label className="primary_label">City</label>
                            <TextField name="city" />
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <label className="primary_label">Zip/Postal code</label>
                            <TextField name="postal_code" />
                        </Grid>

                        <Grid item xs={6} sm={6}>
                            <label className="primary_label">Country</label>
                            <TextField name="country" />
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <label className="primary_label">State/Province/Region</label>
                            <TextField name="region" />
                        </Grid>

                        <Grid item xs={12} sm={12} sx={{ mt: 0, textAlign: "right" }}>
                            <Button variant="contained" disableElevation color="inherit"
                                sx={{ textTransform: "none", mr: 2, lineHeight: 1.3, fontSize: 14 }}
                                onClick={() => setEditing(false)} >Cancel
                            </Button>
                            <SubmitBtn sx={{ float: "right", }}> Save </SubmitBtn>
                        </Grid>
                    </Grid>
                </Form>
            </Formik>
            <SecondaryDivider />
        </>
    )
}

export default BillingInfoForm;

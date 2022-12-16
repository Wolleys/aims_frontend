import { Formik, Form } from "formik";
import { Grid, Button, Container } from "@mui/material";
import { initialValues } from "../../../form_data/companyData";
import TextField from "../../../../../components/shared/FormsUI/TextField";
import { companyInfoSchema } from "../../../../../validations/companyInfoSchema";
import SubmitBtn from "../../../../../components/shared/FormsUI/Button/SubmitBtn";
import FormHeading from "../../../../../components/shared/Typography/FormHeading";
import SecondaryDivider from "../../../../../components/shared/Divider/secondaryDivider";

function EditCompanyDetailsForm(props) {
    const { setEditing } = props;

    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <Container sx={{ mt: 1, p: 0 }}>
            <FormHeading title="About Company" />
            <Formik initialValues={{ ...initialValues }} validationSchema={companyInfoSchema} onSubmit={onSubmit}>
                <Form autoComplete="off">
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={4}>
                            <label className="primary_label">First name</label>
                            <TextField name="first_name" />
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <label className="primary_label">Last name</label>
                            <TextField name="last_name" />
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <label className="primary_label">User name</label>
                            <TextField name="user_name" />
                        </Grid>

                        <Grid item xs={6} sm={4}>
                            <label className="primary_label">Company name</label>
                            <TextField name="company_name" />
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <label className="primary_label">Phone number</label>
                            <TextField name="phone_number" />
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <label className="primary_label">Website</label>
                            <TextField name="website" />
                        </Grid>
                    </Grid>

                    <FormHeading title="Company address" style={{ marginTop: "10px" }} />
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={4}>
                            <label className="primary_label">Address line 1</label>
                            <TextField name="address_line_1" />
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <label className="primary_label">Address line 2</label>
                            <TextField name="address_line_2" />
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <label className="primary_label">City</label>
                            <TextField name="city" />
                        </Grid>

                        <Grid item xs={6} sm={4}>
                            <label className="primary_label">State/Province/Region</label>
                            <TextField name="region" />
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <label className="primary_label">Zip/Postal code</label>
                            <TextField name="postal_code" />
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <label className="primary_label">Country</label>
                            <TextField name="country" />
                        </Grid>

                        <Grid item xs={12} sm={12} sx={{ mt: 0, textAlign: "right" }}>
                            <Button variant="contained" disableElevation color="inherit"
                                sx={{ textTransform: "none", mr: 2, lineHeight: 1.3, fontSize: 14 }} onClick={() => setEditing(false)} >Cancel
                            </Button>
                            <SubmitBtn sx={{ float: "right", }}> Edit </SubmitBtn>
                        </Grid>

                    </Grid>
                </Form>
            </Formik>
            <SecondaryDivider />
        </Container>
    );
}

export default EditCompanyDetailsForm;

import { Formik, Form } from "formik";
import { Grid, Button } from "@mui/material";
import { initialValues } from "../../../../form_data/phoneNumber";
import TextField from "../../../../../../components/shared/FormsUI/TextField";
import { phoneNumberSchema } from "../../../../../../validations/phoneNumberSchema";
import SubmitBtn from "../../../../../../components/shared/FormsUI/Button/SubmitBtn";

function MobileNumberForm(props) {
    const { setAddInfo } = props;

    const onSubmit = (values) => {
        console.log(values);
    };
    
    return (
        <Formik initialValues={{ ...initialValues }} validationSchema={phoneNumberSchema} onSubmit={onSubmit}>
            <Form autoComplete="off">
                <Grid container spacing={2} sx={{ mb: 1 }}>
                    <Grid item xs={12} sm={12}>
                        <label className="primary_label">Phone number</label>
                        <TextField name="phone_number" placeholder="The number used to send the M-Pesa payment." />
                    </Grid>

                    <Grid item xs={12} sm={12} sx={{ mt: 0, textAlign: "left" }}>
                        <Button variant="contained" disableElevation color="inherit"
                            sx={{ textTransform: "none", lineHeight: 1.3, fontSize: 14 }}
                            onClick={() => setAddInfo(false)} >Cancel
                        </Button>
                        <SubmitBtn sx={{ float: "right" }}> Save </SubmitBtn>
                    </Grid>
                </Grid>

            </Form>
        </Formik>
    )
}

export default MobileNumberForm;

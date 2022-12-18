import { Formik, Form } from "formik";
import { Grid } from "@mui/material";
import { initialValues } from "../../../form_data/security";
import TextField from "../../../../../components/shared/FormsUI/TextField";
import { securitySchema } from "../../../../../validations/securitySchema";
import SubmitBtn from "../../../../../components/shared/FormsUI/Button/SubmitBtn";
import FormHeading from "../../../../../components/shared/Typography/FormHeading";

function ChangePasswordForm() {
    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <>
            <FormHeading title="Change Password" />
            <Formik initialValues={{ ...initialValues }} validationSchema={securitySchema} onSubmit={onSubmit} >
                <Form autoComplete="off">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <label className="primary_label">Current password</label>
                            <TextField type="password" name="current_pass" />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <label className="primary_label">New password</label>
                            <TextField type="password" name="password" />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <label className="primary_label">Confirm new password</label>
                            <TextField type="password" name="confirm_pass" />
                        </Grid>

                        <Grid item xs={12} sm={12} sx={{ mt: 0 }}>
                            <SubmitBtn sx={{ width: "100%", p: 1 }} > Update Password </SubmitBtn>
                        </Grid>
                    </Grid>
                </Form>
            </Formik>
        </>
    );
}

export default ChangePasswordForm;

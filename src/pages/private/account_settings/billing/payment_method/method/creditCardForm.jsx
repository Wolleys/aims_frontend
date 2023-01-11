import { Formik, Form } from "formik";
import { Grid, Button } from "@mui/material";
import { initialValues } from "../../../../form_data/creditCard";
import TextField from "../../../../../../components/shared/FormsUI/TextField";
import { creditCardSchema } from "../../../../../../validations/creditCardSchema";
import SubmitBtn from "../../../../../../components/shared/FormsUI/Button/SubmitBtn";

function CreditCardForm(props) {
    const { setAddInfo } = props;

    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <Formik initialValues={{ ...initialValues }} validationSchema={creditCardSchema} onSubmit={onSubmit}>
            <Form autoComplete="off">
                <Grid container spacing={2} sx={{ mb: 1 }}>
                    <Grid item xs={12} sm={6}>
                        <label className="primary_label">Card holder's name</label>
                        <TextField name="card_holder_name" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <label className="primary_label">Card number</label>
                        <TextField name="card_number" type="number" inputProps={{ min: "0" }} />
                    </Grid>

                    <Grid item xs={6} sm={4}>
                        <label className="primary_label">Card exp. date</label>
                        <TextField name="card_exp_month" />
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <label className="primary_label">&nbsp;</label>
                        <TextField name="card_exp_year" />
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <label className="primary_label">CVV</label>
                        <TextField name="cvv" inputProps={{ maxLength: "3" }} />
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
    );
}

export default CreditCardForm;

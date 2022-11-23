import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { suppliers } from "../../../../../data/suppliers";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { partStatus, shelfLife } from "../../../../components/formData";
import { initialValues } from "../../../../components/purchaseFormData";
import Select from "../../../../../../../components/shared/FormsUI/Select";
import { Typography, Container, Grid, Divider, Button } from "@mui/material";
import TextField from "../../../../../../../components/shared/FormsUI/TextField";
import BackBtn from "../../../../../../../components/shared/FormsUI/Button/BackBtn";
import AutoComplete from "../../../../../../../components/shared/FormsUI/AutoComplete";
import SubmitBtn from "../../../../../../../components/shared/FormsUI/Button/SubmitBtn";
import { partPurchaseSchema } from "../../../../../../../validations/partPurchaseSchema";
import DatePicker from "../../../../../../../components/shared/FormsUI/DatePicker/DatePicker";

const suppliersOptions = suppliers?.map((supplier) => ({
    label: supplier.company_name,
    value: supplier.id,
    key: supplier.id,
}));

function EditPurchaseForm(props) {
    const { setEditing } = props;
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    const onSubmit = (values) => {
        console.log(values);
    }

    return (
        <>
            <Container>
                <Typography component="p" variant="h6" gutterBottom sx={{ fontSize: "16px", fontWeight: 600, mb: 2 }}>
                    Edit Purchase
                </Typography>
                <Formik initialValues={{ ...initialValues }} validationSchema={partPurchaseSchema} onSubmit={onSubmit}>
                    <Form autoComplete="off">
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={4} md={3}>
                                <label className="primary_label">Date of purchase</label>
                                <DatePicker name="date_of_purchase" />
                            </Grid>
                            <Grid item xs={6} sm={4} md={3} >
                                <label className="primary_label">Supplier</label>
                                <AutoComplete options={suppliersOptions} name="supplier_id" />
                            </Grid>
                            <Grid item xs={6} sm={4} md={3}>
                                <label className="primary_label">Quantity received</label>
                                <TextField name="quantity_received" type="number" inputProps={{ min: "0" }} />
                            </Grid>
                            <Grid item xs={6} sm={4} md={3}>
                                <label className="primary_label">Part status</label>
                                <Select name="part_status" options={partStatus} />
                            </Grid>

                            <Grid item xs={6} sm={4} md={3}>
                                <label className="primary_label">Date of production</label>
                                <DatePicker name="date_of_production" />
                            </Grid>
                            <Grid item xs={12} sm={4} md={3}>
                                <label className="primary_label">Shelf life</label>
                                <TextField name="shelf_life" type="number" inputProps={{ min: "0" }}
                                    sx={{ width: "50%", marginRight: "-1px", }} />
                                <Select name="duration" value={"None"} label="Duration" options={shelfLife}
                                    sx={{ width: "50%" }} />
                            </Grid>
                            <Grid item xs={6} sm={4} md={3}>
                                <label className="primary_label">Expiry date</label>
                                <TextField name="expiry_date" InputProps={{ readOnly: true, }} />
                            </Grid>
                            <Grid item xs={6} sm={4} md={3}>
                                <label className="primary_label">Buying price ($)</label>
                                <TextField name="bp_in_usd" />
                            </Grid>

                            <Grid item xs={6} sm={4} md={3}>
                                <label className="primary_label">BP (local currency)</label>
                                <TextField name="bp_in_local" />
                            </Grid>
                            <Grid item xs={6} sm={4} md={3}>
                                <label className="primary_label">Selling price ($)</label>
                                <TextField name="sp_in_usd" />
                            </Grid>
                            <Grid item xs={12} sm={12} sx={{ mt: 0, textAlign: "right" }}>
                                <BackBtn startIcon={<ArrowBackIcon />} sx={{ float: "left" }}
                                    onClick={goBack} >Back
                                </BackBtn>
                                <Button variant="contained" disableElevation color="inherit"
                                    sx={{ textTransform: "none", mr: 2, lineHeight: 1.5 }} onClick={() => setEditing(false)} >Cancel
                                </Button>
                                <SubmitBtn sx={{ float: "right", lineHeight: 1.3 }}> Edit </SubmitBtn>
                            </Grid>

                        </Grid>
                    </Form>
                </Formik>

            </Container>
            <Divider sx={{ mt: 2, mb: 2 }} />
        </>
    );
}

export default EditPurchaseForm;

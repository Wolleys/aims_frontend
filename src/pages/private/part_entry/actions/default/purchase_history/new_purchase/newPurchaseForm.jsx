import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { suppliers } from "../../../../../data/suppliers";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Container, Grid, Box } from "@mui/material";
import { partStatus, shelfLife } from "../../../../components/formData";
import { initialValues } from "../../../../components/purchaseFormData";
import Select from "../../../../../../../components/shared/FormsUI/Select";
import TextField from "../../../../../../../components/shared/FormsUI/TextField";
import BackBtn from "../../../../../../../components/shared/FormsUI/Button/BackBtn";
import AutoComplete from "../../../../../../../components/shared/FormsUI/AutoComplete";
import FormHeading from "../../../../../../../components/shared/Typography/FormHeading";
import SubmitBtn from "../../../../../../../components/shared/FormsUI/Button/SubmitBtn";
import { partPurchaseSchema } from "../../../../../../../validations/partPurchaseSchema";
import DatePicker from "../../../../../../../components/shared/FormsUI/DatePicker/DatePicker";
import SecondaryDivider from "../../../../../../../components/shared/Divider/secondaryDivider";

const suppliersOptions = suppliers?.map((supplier) => ({
    label: supplier.company_name,
    value: supplier.id,
    key: supplier.id,
}));

function NewPurchaseForm() {
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
                <FormHeading title="Add New Purchase" />
                <Formik initialValues={{ ...initialValues }} validationSchema={partPurchaseSchema} onSubmit={onSubmit} >
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
                            <Grid item xs={12} sm={4} md={3} sx={{ display: "flex" }}>
                                <Box sx={{ width: "50%", marginRight: "-1px", zIndex: 1 }}>
                                    <label className="primary_label">Shelf life</label>
                                    <TextField name="shelf_life" type="number" inputProps={{ min: "0" }} />
                                </Box>
                                <Box sx={{ width: "50%" }}>
                                    <label className="primary_label">Duration</label>
                                    <Select name="duration" value={"None"} options={shelfLife} />
                                </Box>
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
                            <Grid item xs={12} sm={12} sx={{ mt: 0 }}>
                                <BackBtn startIcon={<ArrowBackIcon />} onClick={goBack} >Back </BackBtn>
                                <SubmitBtn sx={{ float: "right" }}> Add </SubmitBtn>
                            </Grid>
                        </Grid>
                    </Form>
                </Formik>
            </Container>
            <SecondaryDivider />
        </>
    );
}

export default NewPurchaseForm;

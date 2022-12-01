import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { parts } from "../../../../data/parts";
import { engineers } from "../../../../data/engineers";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Typography, Container, Grid, Divider } from "@mui/material";
import { partsSchema } from "../../../../../../validations/partsSchema";
import Select from "../../../../../../components/shared/FormsUI/Select";
import { partStatus, initialValues } from "../../../../form_data/issuePart";
import TextField from "../../../../../../components/shared/FormsUI/TextField";
import BackBtn from "../../../../../../components/shared/FormsUI/Button/BackBtn";
import AutoComplete from "../../../../../../components/shared/FormsUI/AutoComplete";
import SubmitBtn from "../../../../../../components/shared/FormsUI/Button/SubmitBtn";
import DatePicker from "../../../../../../components/shared/FormsUI/DatePicker/DatePicker";

const partNumberOptions = parts?.map((part) => ({
    label: part.part_number,
    value: part.id,
    key: part.id,
}));

const engineersOptions = engineers?.map((engineer) => ({
    label: engineer.first_name + " " + engineer.last_name,
    value: engineer.id,
    status: engineer.user_status,
}));


function IssuePartForm() {
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
                <Typography component="p" variant="h6" gutterBottom sx={{ fontSize: '16px', fontWeight: 600, mb: 2 }}>
                    Issue Part
                </Typography>
                <Formik initialValues={{ ...initialValues }} validationSchema={partsSchema} onSubmit={onSubmit} >
                    <Form autoComplete="off">
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={4} md={3}>
                                <label className="primary_label">Date of issue</label>
                                <DatePicker name="date_of_issue" />
                            </Grid>
                            <Grid item xs={6} sm={4} md={3} >
                                <label className="primary_label">Part number</label>
                                <AutoComplete options={partNumberOptions} name="part_id" />
                            </Grid>
                            <Grid item xs={6} sm={4} md={3}>
                                <label className="primary_label">Description</label>
                                <TextField name="description" />
                            </Grid>
                            <Grid item xs={6} sm={4} md={3}>
                                <label className="primary_label">Serial number</label>
                                <TextField name="serial_number" />
                            </Grid>

                            <Grid item xs={6} sm={4} md={3}>
                                <label className="primary_label">Part status</label>
                                <Select name="part_status" options={partStatus} />
                            </Grid>
                            <Grid item xs={6} sm={4} md={3}>
                                <label className="primary_label">Quantity on hand</label>
                                <TextField name="quantity_on_hand" />
                            </Grid>
                            <Grid item xs={6} sm={4} md={3}>
                                <label className="primary_label">Quantity issued</label>
                                <TextField name="qty_issued" />
                            </Grid>
                            <Grid item xs={6} sm={4} md={3}>
                                <label className="primary_label">Remaining stock</label>
                                <TextField name="qty_remaining" />
                            </Grid>

                            <Grid item xs={6} sm={4} md={3}>
                                <label className="primary_label">Unit selling price</label>
                                <TextField name="usp_usd" />
                            </Grid>
                            <Grid item xs={6} sm={4} md={3}>
                                <label className="primary_label">Total price</label>
                                <TextField name="total_price" />
                            </Grid>
                            <Grid item xs={6} sm={4} md={3}>
                                <label className="primary_label">Issued to</label>
                                <AutoComplete options={engineersOptions} name="issued_to" />
                            </Grid>

                            <Grid item xs={12} sm={12} sx={{ mt: 0 }}>
                                <BackBtn startIcon={<ArrowBackIcon />} onClick={goBack} >Back </BackBtn>
                                <SubmitBtn sx={{ float: "right" }}> Issue </SubmitBtn>
                            </Grid>
                        </Grid>
                    </Form>
                </Formik>
            </Container>
            <Divider sx={{ mt: 2, mb: 2 }} />
        </>
    );
}

export default IssuePartForm;

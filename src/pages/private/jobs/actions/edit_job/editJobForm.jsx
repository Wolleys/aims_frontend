import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { clients } from "../../../data/clients";
import { Container, Grid, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { initialValues } from "../../components/formData";
import { openJobSchema } from "../../../../../validations/openJobSchema";
import TextField from "../../../../../components/shared/FormsUI/TextField";
import BackBtn from "../../../../../components/shared/FormsUI/Button/BackBtn";
import AutoComplete from "../../../../../components/shared/FormsUI/AutoComplete";
import FormHeading from "../../../../../components/shared/Typography/FormHeading";
import SubmitBtn from "../../../../../components/shared/FormsUI/Button/SubmitBtn";
import DatePicker from "../../../../../components/shared/FormsUI/DatePicker/DatePicker";
import SecondaryDivider from "../../../../../components/shared/Divider/secondaryDivider";

const clientOptions = clients?.map((client) => ({
    label: client.first_name + " " + client.last_name,
    value: client.id,
    key: client.id,
}));

function EditJobForm(props) {
    const { setEditing } = props;
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <>
            <Container>
                <FormHeading title="Edit Job" />
                <Formik initialValues={{ ...initialValues }} validationSchema={openJobSchema} onSubmit={onSubmit} >
                    <Form autoComplete="off">
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={4} md={4}>
                                <label className="primary_label">Date Opened</label>
                                <DatePicker name="date_opened" />
                            </Grid>
                            <Grid item xs={6} sm={4} md={4}>
                                <label className="primary_label">Job number</label>
                                <TextField name="job_number" />
                            </Grid>
                            <Grid item xs={6} sm={4} md={4}>
                                <label className="primary_label">Client/Owner</label>
                                <AutoComplete options={clientOptions} name="client_id" />
                            </Grid>

                            <Grid item xs={6} sm={4} md={4}>
                                <label className="primary_label">Aircraft registration</label>
                                <AutoComplete options={clientOptions} name="aircraft_reg" />
                            </Grid>
                            <Grid item xs={6} sm={4} md={4}>
                                <label className="primary_label">Aircraft type</label>
                                <TextField name="aircraft_type" />
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
            <SecondaryDivider />
        </>
    );
}

export default EditJobForm;

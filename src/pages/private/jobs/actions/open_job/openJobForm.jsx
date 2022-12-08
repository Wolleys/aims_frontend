import { Formik, Form } from "formik";
import { clients } from "../../../data/clients";
import { useNavigate } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { initialValues } from "../../components/formData";
import { openJobSchema } from "../../../../../validations/openJobSchema";
import TextField from "../../../../../components/shared/FormsUI/TextField";
import BackBtn from "../../../../../components/shared/FormsUI/Button/BackBtn";
import AutoComplete from "../../../../../components/shared/FormsUI/AutoComplete";
import SubmitBtn from "../../../../../components/shared/FormsUI/Button/SubmitBtn";
import FormHeading from "../../../../../components/shared/Typography/FormHeading";
import DatePicker from "../../../../../components/shared/FormsUI/DatePicker/DatePicker";
import SecondaryDivider from "../../../../../components/shared/Divider/secondaryDivider";

const clientOptions = clients?.map((client) => ({
    label: client.first_name + " " + client.last_name,
    value: client.id,
    key: client.id,
}));

function OpenJobForm() {
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
                <FormHeading title="Open Job" />
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

                            <Grid item xs={12} sm={12} sx={{ mt: 0 }}>
                                <BackBtn startIcon={<ArrowBackIcon />} onClick={goBack}>
                                    Back
                                </BackBtn>
                                <SubmitBtn sx={{ float: "right" }}> Open </SubmitBtn>
                            </Grid>
                        </Grid>
                    </Form>
                </Formik>
            </Container>
            <SecondaryDivider />
        </>
    );
}

export default OpenJobForm;

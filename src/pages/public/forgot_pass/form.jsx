import { Fragment, } from 'react';
import { Formik, Form } from "formik";
import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Grid, Link } from "@mui/material";
import Copyright from "../../../components/shared/Copyright";
import { loginSchema } from "../../../validations/loginSchema";
import TextField from "../../../components/shared/FormsUI/TextField/Auth";
import SubmitBtn from "../../../components/shared/FormsUI/Button/SubmitBtn";

function ForgotPasswordForm() {
    const initialValues = { email: ""}

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
        });
    };

    return (
        <Fragment>
            <Box component="main" maxWidth="sm" sx={{ mb: 4, pt: 9 }}>
                <Box sx={{ my: 8, mx: 0, display: 'flex', flexDirection: 'column', alignItems: 'left', }} >
                    <Grid container>
                        <Grid item xs >
                            <Typography component="h4" variant="h5"
                                sx={{ color: '#03060b', fontWeight: 600, lineHeight: 1.5, mb: 2 }} >Forgot Password
                            </Typography>
                        </Grid>
                    </Grid>
                    <Box sx={{ mt: 1 }}>
                        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={loginSchema} >
                            <Form>
                                <TextField name="email" placeholder="Email address" sx={{ mb: 0 }} />
                                <SubmitBtn size="large" fullWidth
                                    sx={{ mt: 2, mb: 2, textTransform: 'none', borderRadius: '6px' }}> Submit
                                </SubmitBtn>
                            </Form>
                        </Formik>
                        <Grid sx={{ textAlign: 'left', mt: 1 }}>
                            <Link {...{ to: "/", component: RouterLink, }} variant="body2"
                                sx={{ textDecoration: 'none', color: '#5046e4', fontWeight: 500 }} > Sign in
                            </Link>
                        </Grid>
                        <Copyright sx={{ display: { xs: 'flex', md: 'none' }, mt: 5 }} />
                    </Box>
                </Box>
            </Box>
        </Fragment>
    );
}

export default ForgotPasswordForm;
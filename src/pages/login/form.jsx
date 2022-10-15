import * as Api from '../../api/auth';
import { Formik, Form } from "formik";
import { Fragment, useState, useContext } from "react";
import Copyright from "../../components/shared/Copyright";
import { loginSchema } from "../../validations/loginSchema";
import { AuthContext } from "../../context/AuthContextProvider";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import FormikTextField from '../../components/shared/TextField/FormikTextField';
import { Box, Grid, Button, Typography, Link, Alert, CircularProgress } from "@mui/material";

function SignIn() {
    const navigate = useNavigate();
    const { setIsAuth } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const initialValues = { email: "", password: "" }

    const onSubmit = (data) => {
        setIsLoading(true);
        Api.Login(data).then((response) => {
            if (!response.data.auth) {
                setError(response.data.error);
                setIsLoading(false);
            }
            else {
                setIsAuth({ firstName: response.data.firstName, id: response.data.id, status: true });
                setIsLoading(false);
                navigate("/dashboard/overview");
            }
        })
    }

    const handleMsg = (error) => {
        return (error) ? (<Alert severity="error" align="center">{error}</Alert>) : null
    };

    return (
        <Fragment>
            <Box component="main" maxWidth="sm" sx={{ mb: 4, pt: 9 }}>
                <Box sx={{ my: 8, mx: 0, display: 'flex', flexDirection: 'column', alignItems: 'left', }} >
                    <Grid container>
                        <Grid item xs >
                            <Typography component="h4" variant="h5"
                                sx={{ color: '#03060b', fontWeight: 600, lineHeight: 1.5, mb: 2 }} >Sign in
                            </Typography>
                        </Grid>
                    </Grid>
                    <Box sx={{ mt: 1 }}>
                        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={loginSchema} >
                            <Form>
                                <FormikTextField formikKey="email" fullWidth autoComplete="none" variant="outlined" autoFocus
                                    disabled={isLoading} placeholder="Email address" sx={{ mb: 2 }} />
                                <br />
                                <FormikTextField formikKey="password" fullWidth type="password" autoComplete="none" variant="outlined"
                                    disabled={isLoading} placeholder="Password" />
                                <Button type="submit" size="large" fullWidth variant="contained" disableElevation disabled={isLoading}
                                    sx={{ mt: 2, mb: 2, textTransform: 'none', borderRadius: '6px', background: '#5046e4' }} >
                                    {isLoading ? (<CircularProgress size={26} color="inherit" />) : (<span>Sign in</span>)}
                                </Button>
                            </Form>
                        </Formik>
                        <Grid sx={{ textAlign: 'left', mt: 1 }}>
                            <Link {...{ to: "/app/forgot-password", component: RouterLink, }} variant="body2"
                                sx={{ textDecoration: 'none', color: '#5046e4', fontWeight: 500 }} > Forgot password?
                            </Link>
                        </Grid>
                        <Grid sx={{ textAlign: 'center', mt: 4 }}>
                            {isLoading ? null : (handleMsg(error))}
                        </Grid>
                        <Copyright sx={{ display: { xs: 'flex', md: 'none' }, mt: 5 }} />
                    </Box>
                </Box>
            </Box>
        </Fragment>
    );
}

export default SignIn;
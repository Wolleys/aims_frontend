import { Formik, Form } from "formik";
import { Login } from "../../../queries";
import { Fragment, useState, useContext } from "react";
import Copyright from "../../../components/shared/Copyright";
import { loginSchema } from "../../../validations/loginSchema";
import { AuthContext } from "../../../context/AuthContextProvider";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContextProvider";
import TextField from "../../../components/shared/FormsUI/TextField/Auth";
import SubmitBtn from "../../../components/shared/FormsUI/Button/SubmitBtn";
import { Box, Grid, Typography, Link, Alert, CircularProgress } from "@mui/material";

function SignIn() {
    const navigate = useNavigate();
    const { theme } = useContext(ThemeContext);
    const { setIsAuth } = useContext(AuthContext);
    const [message, setMessage] = useState("")
    const { mutateAsync, isLoading, isError, error } = Login()

    const headingTypoStyle = {
        mb: 2,
        fontWeight: 600,
        lineHeight: 1.5,
        color: theme === "light" ? "#24292f" : "#c9d1d9",
    }
    const copyRightStyle = {
        mt: 5,
        fontSize: "12px",
        display: { xs: "flex", md: "none" },
        color: theme === "light" ? "#57606a" : "#8b949e",

    }
    const linkStyle = {
        fontWeight: 500,
        fontSize: "13px",
        textDecoration: "none",
        color: theme === "light" ? "#0969da" : "#58a6ff",
    }

    const initialValues = { email: "", password: "" }

    const onSubmit = async (data) => {
        await mutateAsync({ ...data }).then((response) => {
            console.log(response.data)
            if (!response.data.auth) {
                setMessage(response.data.error);
            }
            else {
                setIsAuth({
                    status: true,
                    id: response.data.id,
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    avatar: response.data.avatar,
                });
                navigate("/dashboard/overview");
            }
        })
    }

    const handleMsg = (err) => {
        return (err) ? (<Alert severity="error" align="center">{err}</Alert>)
            : (isError) ? (<Alert severity="error" align="center">{error.message}</Alert>)
                : null
    };

    return (
        <Fragment>
            <Box component="main" maxWidth="sm" sx={{ mb: 4, pt: 9 }}>
                <Box sx={{ my: 8, mx: 0, display: "flex", flexDirection: "column", alignItems: "left", }} >
                    <Grid container>
                        <Grid item xs >
                            <Typography component="h4" variant="h5" sx={headingTypoStyle} > Sign in </Typography>
                        </Grid>
                    </Grid>
                    <Box sx={{ mt: 1 }}>
                        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={loginSchema} >
                            <Form>
                                <TextField name="email" placeholder="Email address" disabled={isLoading} style={{ marginBottom: 20 }} />
                                <TextField name="password" placeholder="Password" disabled={isLoading} type="password" />
                                <SubmitBtn size="large" fullWidth disabled={isLoading}
                                    sx={{ mt: 2, mb: 2, textTransform: "none", borderRadius: "6px" }} >
                                    {isLoading ? (<CircularProgress size={26} color="inherit" />) : (<span>Sign in</span>)}
                                </SubmitBtn>
                            </Form>
                        </Formik>
                        <Grid sx={{ textAlign: "left", mt: 1 }}>
                            <Link {...{ to: "/forgot-password", component: RouterLink, }} variant="body2"
                                sx={linkStyle} > Forgot password?
                            </Link>
                        </Grid>
                        <Grid sx={{ textAlign: "center", mt: 4 }}>
                            {isLoading ? null : (handleMsg(message))}
                        </Grid>
                        <Copyright sx={copyRightStyle} />
                    </Box>
                </Box>
            </Box>
        </Fragment>
    );
}

export default SignIn;
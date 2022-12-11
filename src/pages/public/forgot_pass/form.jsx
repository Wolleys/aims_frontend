import { Formik, Form } from "formik";
import { Fragment, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Grid, Link } from "@mui/material";
import Copyright from "../../../components/shared/Copyright";
import { loginSchema } from "../../../validations/loginSchema";
import { ThemeContext } from "../../../context/ThemeContextProvider";
import TextField from "../../../components/shared/FormsUI/TextField/Auth";
import SubmitBtn from "../../../components/shared/FormsUI/Button/SubmitBtn";

function ForgotPasswordForm() {
    const { theme } = useContext(ThemeContext);
    const initialValues = { email: ""}

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

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get("email"),
        });
    };

    return (
        <Fragment>
            <Box component="main" maxWidth="sm" sx={{ mb: 4, pt: 9 }}>
                <Box sx={{ my: 8, mx: 0, display: "flex", flexDirection: "column", alignItems: "left", }} >
                    <Grid container>
                        <Grid item xs >
                            <Typography component="h4" variant="h5" sx={headingTypoStyle} >Forgot Password </Typography>
                        </Grid>
                    </Grid>
                    <Box sx={{ mt: 1 }}>
                        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={loginSchema} >
                            <Form>
                                <TextField name="email" placeholder="Email address" sx={{ mb: 0 }} />
                                <SubmitBtn size="large" fullWidth
                                    sx={{ mt: 2, mb: 2, textTransform: "none", borderRadius: "6px" }}> Submit
                                </SubmitBtn>
                            </Form>
                        </Formik>
                        <Grid sx={{ textAlign: "left", mt: 1 }}>
                            <Link {...{ to: "/", component: RouterLink, }} sx={linkStyle} > Sign in </Link>
                        </Grid>
                        <Copyright sx={copyRightStyle} />
                    </Box>
                </Box>
            </Box>
        </Fragment>
    );
}

export default ForgotPasswordForm;
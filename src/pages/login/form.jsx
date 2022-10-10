import { Fragment } from 'react';
import { Link as RouterLink } from "react-router-dom";
import Copyright from "../../components/shared/Copyright";
import AuthTextField from "../../components/shared/TextField/AuthTextField";
import { Box, Grid, Button, Typography, Link } from "@mui/material";

function SignIn() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            username: data.get('username'),
        });
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
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <AuthTextField required fullWidth autoComplete="none" variant="outlined" name="username" autoFocus
                            sx={{ mb: 2 }} placeholder="Email address" />
                        <br />
                        <AuthTextField required fullWidth type="password" autoComplete="none" variant="outlined" name="password"
                            placeholder="Password" />
                        <Button type="submit" size="large" fullWidth variant="contained" disableElevation
                            sx={{ mt: 2, mb: 2, textTransform: 'none', borderRadius: '6px', background: '#5046e4' }} >
                            Sign in
                        </Button>
                        <Grid sx={{ textAlign: 'left', mt: 1 }}>
                            <Link {...{ to: "/app/forgot-password", component: RouterLink, }} variant="body2"
                                sx={{ textDecoration: 'none', color: '#5046e4', fontWeight: 500 }} > Forgot password?
                            </Link>
                        </Grid>
                        <Grid sx={{ textAlign: 'center', mt: 4 }}>
                            {/* Error */}
                        </Grid>
                        <Copyright sx={{ display: { xs: 'flex', md: 'none' }, mt: 5 }} />
                    </Box>
                </Box>
            </Box>
        </Fragment>
    );
}

export default SignIn;
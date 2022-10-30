import JobContainer from "./jobContainer";
import { Box, Grid } from "@mui/material";

function Layout() {
    return (
        <Box>
            <Grid container spacing={1} sx={{ mt: -1 }} >
                <Grid item xs={12} sm={4} md={3} >
                    <JobContainer />
                </Grid>
                <Grid item xs={12} sm={8} md={9} >
                    Content
                </Grid>
            </Grid>
        </Box>
    );
};
export default Layout;

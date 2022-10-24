import { Fragment } from "react";
import { TextField, Grid, Button } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";

export default function SearchEport(props) {
    return (
        <Fragment>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={4} md={6}>
                    <TextField label="Search..." type="search" variant="outlined" size="small" sx={{ mt: 0, mb: 1 }} />
                </Grid>
                <Grid item xs={6} sm={4} md={6} sx={{ textAlign: "right", mt: 1.3 }}>
                    <Button variant="contained" disableElevation size="small"
                        sx={{ textTransform: "none", background: "#5046e4" }} startIcon={<DescriptionIcon />} > Export
                    </Button>
                </Grid>
            </Grid>
        </Fragment>
    );
}

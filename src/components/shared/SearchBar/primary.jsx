import { Fragment } from "react";
import { Grid, Button } from "@mui/material";
import SearchTextField from "../TextField/SearchTextField"
import DescriptionIcon from "@mui/icons-material/Description";

export default function PrimarySearchBar(props) {
    const { action, label, icon } = props;
    
    return (
        <Fragment>
            <Grid container spacing={2} >
                <Grid item xs={12} sm={6} md={6}>
                    <SearchTextField placeholder="Search..." type="search" variant="outlined" size="small"
                        sx={{ mt: 0, mb: { xs: 0, sm: 1 }, width: { xs: "100%", sm: "auto" } }} />
                </Grid>
                <Grid item xs={12} sm={6} md={6} sx={{ textAlign: "right", mt: { xs: -0.5, sm: 0.5 }, mb: { xs: 1 } }}>
                    {action &&
                        <Button variant="contained" disableElevation size="small"
                            sx={{ textTransform: "none", mr: 1, background: "#5046e4", borderRadius: "4px" }} startIcon={icon} >
                            {label}
                        </Button>
                    }
                    <Button variant="contained" disableElevation size="small"
                        sx={{ textTransform: "none", background: "#5046e4", borderRadius: "4px" }} startIcon={<DescriptionIcon />} > Export
                    </Button>
                </Grid>
            </Grid>
        </Fragment>
    );
}

import { Grid, Box } from "@mui/material";
import CloseJobDialog from "../CloseJobDialog";
import SearchTextField from "../FormsUI/Search";
import ExportBtn from "../FormsUI/Button/ExportBtn";
import DescriptionIcon from "@mui/icons-material/Description";

export default function SearchCloseExp(props) {
    const { closeJob } = props;

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
                <SearchTextField sx={{ mt: 0, mb: { xs: 0, sm: 1 }, width: { xs: "100%", sm: "auto" }}} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} sx={{ textAlign: "right", mt: { xs: -0.5, sm: 0.5 }, mb: { xs: 1 }}}
            >
                {closeJob}
                <ExportBtn sx={{ fontSize: "13.1px" }} startIcon={<DescriptionIcon />}>
                    Export
                </ExportBtn>
            </Grid>
            <Box sx={{ justifyContent: "center", display: { xs: "12", md: "flex" } }}>
                <Grid item sm={3} sx={{ textAlign: "center", mt: 1 }}>
                    <CloseJobDialog />
                </Grid>
            </Box>
        </Grid>
    );
}

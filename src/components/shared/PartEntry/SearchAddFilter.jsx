import HistoryAction from "./HistoryAction";
import { Grid, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchTextField from "../FormsUI/Search";

function SearchAddFilter(props) {
    const { purchasePart } = props;
    return (
        <Grid container spacing={2} >
            <Grid item xs={12} sm={6} md={6}>
                <SearchTextField sx={{ mt: 0, mb: { xs: 0, sm: 1 }, width: { xs: "100%", sm: "auto" } }} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} sx={{ textAlign: "right", mt: { xs: -0.5, sm: 0.5 }, mb: { xs: 1 } }}>
                <Button onClick={purchasePart} startIcon={<AddIcon />}
                    sx={{ mr: 1, fontSize: "13.1px", textTransform: "none", color: "#5046e4" }}  >
                    New Purchase
                </Button>
                <Button size="small" sx={{ textTransform: "none", padding: 0, float: "right" }}>
                    <HistoryAction />
                </Button>
            </Grid>
        </Grid>
    );
}

export default SearchAddFilter;

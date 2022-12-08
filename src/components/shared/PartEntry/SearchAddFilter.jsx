import FilterData from "./FilterData";
import { Grid, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import SearchTextField from "../FormsUI/Search";
import ActionBtn from "../FormsUI/Button/ActionBtn";

function SearchAddFilter(props) {
    const navigate = useNavigate();
    const purchasePart = () => {
        navigate("/part-entry/default/purchase-history/new-purchase");
    };

    return (
        <Grid container spacing={2} >
            <Grid item xs={12} sm={6} md={6}>
                <SearchTextField sx={{ mt: 0, mb: { xs: 0, sm: 1 }, width: { xs: "100%", sm: "auto" } }} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} sx={{ textAlign: "right", mt: { xs: -0.5, sm: 0.5 }, mb: { xs: 1 } }}>
                <ActionBtn onClick={purchasePart} sx={{ mr: 1, fontSize: "13.1px" }} startIcon={<AddIcon />} >
                    New Purchase
                </ActionBtn>
                <Button size="small" sx={{ textTransform: "none", padding: 0, float: "right" }}>
                    <FilterData />
                </Button>
            </Grid>
        </Grid>
    );
}

export default SearchAddFilter;

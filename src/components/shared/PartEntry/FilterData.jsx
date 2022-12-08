import Filter from "../FormsUI/Select/filter";
import { Box, FormControl } from "@mui/material";

function FilterData() {
    const menuItems = [
        { label: "Last 30 days", value: "Last 30 days" },
        { label: "Last Month", value: "Last Month" },
        { label: "Last Year", value: "Last Year" },
        { label: "All Records", value: "All Records" },
    ];
    
    return (
        <Box>
            <FormControl style={{ width: "115px", textAlign: "center" }}>
                <Filter options={menuItems} />
            </FormControl>
        </Box>
    );
}

export default FilterData;

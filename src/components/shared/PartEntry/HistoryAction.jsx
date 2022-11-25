import { useState } from "react";
import { Select, MenuItem, Box, FormControl } from "@mui/material";

function HistoryAction() {
    const [filter, setFilter] = useState("");

    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <Box style={{ margin: "5px 5px 0 0" }}>
            <FormControl style={{ width: "110px", textAlign: "center" }}>
                <Select value={filter || "Last 30 days"} onChange={handleChange} variant="standard" disableUnderline
                    style={{ fontSize: "13px", padding: "1px 0 0 0px", color: "#9c27b0", fontWeight: "500" }} >
                    <MenuItem value="Last 30 days" sx={{ fontSize: "13px" }}>Last 30 days</MenuItem>
                    <MenuItem value="Last Month" sx={{ fontSize: "13px" }}>Last Month</MenuItem>
                    <MenuItem value="Last Year" sx={{ fontSize: "13px" }}>Last Year</MenuItem>
                    <MenuItem value="All Records" sx={{ fontSize: "13px" }}>All Records</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

export default HistoryAction;

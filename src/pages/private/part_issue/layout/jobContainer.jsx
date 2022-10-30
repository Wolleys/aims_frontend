import JobsList from "../tables/default/jobsList";
import { Card, CardContent, Box } from "@mui/material";
import SearchTextField from "../../../../components/shared/TextField/SearchTextField";

function JobContainer() {
    return (
        <Card sx={{ borderRadius: "6px" }} variant="outlined">
            <Box sx={{padding: "0 16px"}}>
                <SearchTextField fullWidth sx={{marginTop: "15px"}} placeholder="Search..." />
            </Box>
            <CardContent sx={{ mt: "0px" }}>
                <JobsList />
            </CardContent>
        </Card>
    );
}
export default JobContainer;

import { useContext } from "react";
import JobsList from "../tables/default/jobsList";
import { Card, CardContent, Box } from "@mui/material";
import { ThemeContext } from "../../../../context/ThemeContextProvider";
import SearchTextField from "../../../../components/shared/FormsUI/Search";

function JobContainer() {
    const { theme } = useContext(ThemeContext);

    const cardStyle = {
        borderRadius: "4px",
        backgroundColor: theme === "light" ? "#FAFAFA" : "#0d1117",
        border: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
    };

    const defaultProps = {
        sx: cardStyle,
        variant: "outlined",
    }

    return (
        <Card {...defaultProps}>
            <Box sx={{padding: "0 16px"}}>
                <SearchTextField fullWidth sx={{marginTop: "15px"}} />
            </Box>
            <CardContent sx={{ mt: "0px" }}>
                <JobsList />
            </CardContent>
        </Card>
    );
}
export default JobContainer;

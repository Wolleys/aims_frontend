import { useMemo, useContext } from "react";
import { Grid, Box, Typography } from "@mui/material";
import { totalSalesValue } from "../../../helpers/stockTotalValues";
import { ThemeContext } from "../../../context/ThemeContextProvider";

const SalesRecords = (props) => {
    const { length, data } = props;
    const { theme } = useContext(ThemeContext);
    const salesValue = useMemo(() => totalSalesValue(data), [data]);

    return (
        <Grid container sx={{ mt: 1, pr: 2, pl: 2 }} >
            <Grid item xs={12} sm={6} md={6} sx={{ mb: { xs: 1, sm: 1 } }}>
                <Box sx={{ mt: 0.5 }}>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            color: theme === "light" ? "#57606a" : "#8b949e",
                            margin: { xs: "0", sm: "0 50px 0 0" },
                            float: "left",
                        }}
                    >
                        Records: {length}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            color: theme === "light" ? "#57606a" : "#8b949e",
                            float: { xs: "right", sm: "left" },
                        }}
                    >
                        Value: ${salesValue}
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default SalesRecords;

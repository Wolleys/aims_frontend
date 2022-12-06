import { useMemo, useContext } from "react";
import { Grid, Box, Typography } from "@mui/material";
import { ThemeContext } from "../../../context/ThemeContextProvider";
import { totalQtyIssued, totalSalesValue } from "../../../helpers/stockTotalValues";

function RecordsAndTotal(props) {
    const { length, history} = props;
    const { theme } = useContext(ThemeContext);
    const qtyIssued = useMemo(() => totalQtyIssued(history), [history]);
    const salesValue = useMemo(() => totalSalesValue(history), [history]);

    return (
        <Grid container sx={{ mt: 1, pr: 2, pl: 2 }}>
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
                        Qty Issued: {qtyIssued}
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} sx={{ textAlign: "right" }}>
                <Box sx={{ mt: 0.5 }}>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            color: theme === "light" ? "#57606a" : "#8b949e",
                            margin: { xs: "0", sm: "0 4rem 0 0" },
                        }}
                    >
                        Value: ${salesValue}
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
}

export default RecordsAndTotal;

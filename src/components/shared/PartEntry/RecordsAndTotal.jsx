import { useMemo } from "react";
import { Grid, Box, Typography } from "@mui/material";
import { totalQtyIssued, totalStockValue } from "../../../helpers/stockTotalValues";

function RecordsAndTotal(props) {
    const { length, history} = props;
    const qtyIssued = useMemo(() => totalQtyIssued(history), [history]);
    const stockValue = useMemo(() => totalStockValue(history), [history]);

    return (
        <Grid container sx={{ mt: 1, pr: 2, pl: 2 }}>
            <Grid item xs={12} sm={6} md={6} sx={{ mb: { xs: 1, sm: 1 } }}>
                <Box sx={{ mt: 0.5 }}>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            color: "#888",
                            margin: { xs: "0", sm: "0 50px 0 0" },
                            float: "left",
                        }}
                    >
                        Records: {length}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            color: "#888",
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
                            color: "#888",
                            margin: { xs: "0", sm: "0 4rem 0 0" },
                        }}
                    >
                        Value: ${stockValue}
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
}

export default RecordsAndTotal;
